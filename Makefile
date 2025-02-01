# При первом открытии проекта после клонирования:
# 1. Инициализация проекта и установка зависимостей
# make init

# 2. Проверка работоспособности в dev режиме
# make dev

# Если нужно очистить все и начать заново:
# make refresh-all

# Когда нужно деплоить:
# 1. Полное обновление и деплой одной командой
# make update-deploy

# ИЛИ пошагово:

# 1. Собрать все (Next.js + Docker image)
# make build-all

# 2. Деплой на сервер
# make deploy

# Если нужно только перезапустить сервис на продакшене:
# make restart-service

# Дополнительные полезные команды:
# Проверка статуса контейнера
# make status

# Просмотр логов
# make logs

# Остановка контейнера
# make stop

# Полная очистка Docker ресурсов
# make clean-docker

# ===========================================
# Configuration Variables
# ===========================================

# Tools and Commands
NODE := node
NPM := npm
DOCKER := docker

# Project Settings
NODE_VERSION = 20
BUILD_MODE = production  # Can be 'production' or 'development'
DEV_PORT = 3000

# Docker Configuration
IMAGE_NAME = portfolio-nextjs
IMAGE_TAG = latest
CONTAINER_NAME = $(IMAGE_NAME)-container
PORT = 8080

# Artifact Settings
ARTIFACTS_DIR = artifacts
DOCKER_TAR = $(ARTIFACTS_DIR)/$(IMAGE_NAME)-$(IMAGE_TAG).tar
DOCKER_COMPRESSED = $(ARTIFACTS_DIR)/$(IMAGE_NAME)-$(IMAGE_TAG).tar.gz

# ===========================================
# Development Tasks
# ===========================================

.PHONY: dev init get clean format lint build-all deploy update-deploy restart-service status logs stop clean-docker

# Initialize project
init: git-setup install

# Setup Git
git-setup:
	git pull --rebase=false

# Dependencies management
install:
	$(NPM) install

install-clean: clean install

upgrade:
	$(NPM) update

upgrade-all: clean upgrade install

# Cleaning tasks
clean:
	rm -rf .next out
	rm -rf node_modules

cache-clean:
	$(NPM) cache clean --force

refresh-all: cache-clean clean install

# Code maintenance
lint:
	$(NPM) run lint

format:
	$(NPM) run format

# ===========================================
# Docker Tasks
# ===========================================

# Create artifacts directory
$(ARTIFACTS_DIR):
	@mkdir -p $(ARTIFACTS_DIR)

# Build Docker image
build:
	@echo "Building Docker image..."
	@$(DOCKER) build -t $(IMAGE_NAME):$(IMAGE_TAG) \
		--build-arg NODE_VERSION=$(NODE_VERSION) \
		--build-arg BUILD_MODE=$(BUILD_MODE) \
		.
	@echo "Docker image built successfully"

# Development mode with hot reload
dev:
	@echo "Starting development server..."
	@$(DOCKER) build -t $(IMAGE_NAME):dev \
		--build-arg NODE_VERSION=$(NODE_VERSION) \
		--build-arg BUILD_MODE=development \
		--target development \
		.
	@$(DOCKER) run --rm -it \
		-p $(DEV_PORT):$(DEV_PORT) \
		-v "$${PWD}:/app:delegated" \
		-v "portfolio-nextjs-node-modules:/app/node_modules" \
		-v "portfolio-nextjs-next-cache:/app/.next" \
		--name $(CONTAINER_NAME)-dev \
		$(IMAGE_NAME):dev \
		npm run dev -- -p $(DEV_PORT)

# Docker image management
save: $(ARTIFACTS_DIR)
	@echo "Saving Docker image to $(DOCKER_TAR)..."
	@$(DOCKER) save $(IMAGE_NAME):$(IMAGE_TAG) > $(DOCKER_TAR)
	@echo "Docker image saved successfully"

compress: save
	@echo "Compressing Docker image..."
	@gzip -f $(DOCKER_TAR)
	@echo "Docker image compressed to $(DOCKER_COMPRESSED)"

load:
	@echo "Loading Docker image from $(DOCKER_COMPRESSED)..."
	@gunzip -c $(DOCKER_COMPRESSED) | docker load
	@echo "Docker image loaded successfully"

# Container management
run:
	@echo "Running Docker container..."
	@$(DOCKER) stop $(CONTAINER_NAME) 2>/dev/null || true
	@$(DOCKER) rm $(CONTAINER_NAME) 2>/dev/null || true
	@$(DOCKER) run -d \
		-p $(PORT):80 \
		--name $(CONTAINER_NAME) \
		$(IMAGE_NAME):$(IMAGE_TAG)
	@echo "Container started on http://localhost:$(PORT)"

stop:
	@echo "Stopping Docker container..."
	@$(DOCKER) stop $(CONTAINER_NAME) || true
	@echo "Container stopped"

clean-docker:
	@echo "Cleaning up Docker resources..."
	@$(DOCKER) ps -a -q -f name=$(CONTAINER_NAME) | xargs -r docker stop || true
	@$(DOCKER) ps -a -q -f name=$(CONTAINER_NAME)-dev | xargs -r docker stop || true
	@$(DOCKER) ps -a -q -f name=$(CONTAINER_NAME) | xargs -r docker rm -f || true
	@$(DOCKER) ps -a -q -f name=$(CONTAINER_NAME)-dev | xargs -r docker rm -f || true
	@$(DOCKER) images $(IMAGE_NAME) -q | xargs -r docker rmi -f || true
	@$(DOCKER) volume rm -f portfolio-nextjs-node-modules portfolio-nextjs-next-cache || true
	@rm -rf $(ARTIFACTS_DIR)
	@echo "Cleanup completed"

logs:
	@$(DOCKER) logs -f $(CONTAINER_NAME)

status:
	@echo "Container status:"
	@$(DOCKER) ps -a --filter name=$(CONTAINER_NAME)

	# ===========================================
# Deployment Tasks
# ===========================================

# Update and deploy
update-deploy: build-all deploy

# Build everything (Next.js build + Docker image)
build-all: install
	@echo "Building Next.js app..."
	@$(NPM) run build
	@echo "Building Docker image..."
	@$(DOCKER) build -t $(IMAGE_NAME):$(IMAGE_TAG) .

# Deploy to production server
deploy:
	@echo "Deploying to production server..."
	@$(DOCKER) save $(IMAGE_NAME):$(IMAGE_TAG) | gzip | ssh -p 22 dmitriy@179.61.237.164 'gunzip | docker load'
	@ssh -p 22 dmitriy@179.61.237.164 'cd /home/dmitriy/Documents/DEV/MY_GITHUB/scripts/services/traefik/fi-server/ && docker compose down portfolio && docker compose up -d portfolio'
	@echo "Deployment completed"

# Restart service on production
restart-service:
	@echo "Restarting service on production..."
	@ssh -p 22 dmitriy@179.61.237.164 'cd /home/dmitriy/Documents/DEV/MY_GITHUB/scripts/services/traefik/fi-server/ && docker compose restart portfolio'
	@echo "Service restarted"

# ===========================================
# Default and Help Tasks
# ===========================================

.PHONY: all help

# Default target
all: build save compress

# Help
help:
	@echo "Available commands:"
	@echo ""
	@echo "Development Commands:"
	@echo "  init         - Initialize project (Git setup, dependencies)"
	@echo "  install      - Install Node.js dependencies"
	@echo "  install-clean- Clean and install all dependencies"
	@echo "  clean        - Clean build artifacts and dependencies"
	@echo "  format       - Format code"
	@echo "  lint         - Run linting"
	@echo ""
	@echo "Docker Commands:"
	@echo "  build        - Build production Docker image"
	@echo "  dev          - Start development server with hot reload"
	@echo "  run          - Run Docker container"
	@echo "  stop         - Stop running container"
	@echo "  clean-docker - Remove all Docker resources"
	@echo "  logs         - Show container logs"
	@echo "  status       - Show container status"
	@echo ""
	@echo "Deployment Commands:"
	@echo "  update-deploy   - Build and deploy to production"
	@echo "  build-all      - Build Next.js app and Docker image"
	@echo "  deploy         - Deploy to production server"
	@echo "  restart-service- Restart service on production"
	@echo ""
	@echo "Environment:"
	@echo "  NODE_VERSION = $(NODE_VERSION)"
	@echo "  BUILD_MODE   = $(BUILD_MODE)"
	@echo "  PORT        = $(PORT)"
	@echo "  DEV_PORT    = $(DEV_PORT)"