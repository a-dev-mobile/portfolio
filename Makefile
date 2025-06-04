# Portfolio Next.js Project Makefile
# Primary commands:
# make init - Initialize the project after cloning
# make build - Build the Docker image
# make run - Run the container
# make dev - Run in development mode with hot reload
# make clean - Clean up project files and dependencies
# make clean-docker - Clean up Docker resources
# make tag-and-push TAG=X.Y.Z - Update version, commit, tag and push

# ===========================================
# Configuration Variables
# ===========================================

# Tools and Commands
NODE := node
NPM := npm
DOCKER := docker
GIT := git

# Project Settings
NODE_VERSION = 20
BUILD_MODE = production  # Can be 'production' or 'development'

# Docker Configuration
IMAGE_NAME = portfolio-nextjs
IMAGE_TAG = latest
CONTAINER_NAME = portfolio
PORT = 8080
DEV_PORT = 3000

# ===========================================
# Development Tasks
# ===========================================

.PHONY: dev init install clean build run stop status logs clean-docker help update-version commit-version tag-version tag-and-push check-git-status confirm-tag

# Initialize project
init: install

# Dependencies management
install:
	$(NPM) install

clean:
	rm -rf .next out
	rm -rf node_modules

# ===========================================
# Docker Tasks
# ===========================================

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
	@echo "Cleanup completed"

logs:
	@$(DOCKER) logs -f $(CONTAINER_NAME)

status:
	@echo "Container status:"
	@$(DOCKER) ps -a --filter name=$(CONTAINER_NAME)

# ===========================================
# Version and Release Management
# ===========================================

# Check for uncommitted changes
check-git-status:
	@if [ -n "$$($(GIT) status --porcelain)" ]; then \
		echo "⚠️ ВНИМАНИЕ: В репозитории есть незафиксированные изменения:"; \
		$(GIT) status --short; \
		echo ""; \
		read -p "Продолжить создание тега без фиксации изменений? (y/n) " answer; \
		if [ "$$answer" != "y" ]; then \
			echo "Операция отменена пользователем"; \
			exit 1; \
		fi; \
		echo "Продолжаем по запросу пользователя..."; \
	else \
		echo "✅ В репозитории нет незафиксированных изменений"; \
	fi

# Confirm tag creation
confirm-tag:
	@if [ -z "$(TAG)" ]; then \
		echo "Error: specify TAG variable, e.g.: make tag-and-push TAG=1.0.0"; \
		exit 1; \
	fi
	@echo "Вы собираетесь создать и запушить тег $(TAG)"
	@read -p "Подтвердите действие (y/n): " answer; \
	if [ "$$answer" != "y" ]; then \
		echo "Операция отменена пользователем"; \
		exit 1; \
	fi

# Update version in package.json
update-version:
	@if [ -z "$(TAG)" ]; then \
		echo "Error: specify TAG variable, e.g.: make update-version TAG=1.0.0"; \
		exit 1; \
	fi
	@echo "Updating version in package.json to $(TAG)..."
	@sed -i 's/"version": ".*"/"version": "$(TAG)"/' package.json
	@echo "Updated version in package.json:"
	@grep "\"version\"" package.json

# Commit version changes
commit-version:
	@if [ -z "$(TAG)" ]; then \
		echo "Error: specify TAG variable, e.g.: make commit-version TAG=1.0.0"; \
		exit 1; \
	fi
	@echo "Committing version changes for $(TAG)..."
	@$(GIT) add package.json
	@$(GIT) commit -m "Update version to $(TAG)"
	@echo "Changes committed."

# Create and push tag
tag-version:
	@if [ -z "$(TAG)" ]; then \
		echo "Error: specify TAG variable, e.g.: make tag-version TAG=1.0.0"; \
		exit 1; \
	fi
	@echo "Creating and pushing tag $(TAG)..."
	@$(GIT) tag -a $(TAG) -m "Release $(TAG)"
	@$(GIT) push origin $(TAG)
	@echo "Tag $(TAG) created and pushed."

# Complete process: update version, commit, tag and push
tag-and-push: check-git-status confirm-tag
	@if [ -z "$(TAG)" ]; then \
		echo "Error: specify TAG variable, e.g.: make tag-and-push TAG=1.0.0"; \
		exit 1; \
	fi
	@echo "Starting complete version update and tag process for $(TAG)..."
	@$(MAKE) update-version TAG=$(TAG)
	@$(MAKE) commit-version TAG=$(TAG)
	@$(MAKE) tag-version TAG=$(TAG)
	@$(GIT) push
	@echo "=== All done! ==="
	@echo "Version updated to $(TAG), changes committed, tagged and pushed."
	@echo "Pipeline status can be checked at GitLab CI/CD"

# ===========================================
# Help Task
# ===========================================

# Default target
help:
	@echo "Available commands:"
	@echo ""
	@echo "Development Commands:"
	@echo "  init             - Initialize project (install dependencies)"
	@echo "  install          - Install Node.js dependencies"
	@echo "  clean            - Clean build artifacts and dependencies"
	@echo ""
	@echo "Docker Commands:"
	@echo "  build            - Build production Docker image"
	@echo "  dev              - Start development server with hot reload"
	@echo "  run              - Run Docker container"
	@echo "  stop             - Stop running container"
	@echo "  clean-docker     - Remove all Docker resources"
	@echo "  logs             - Show container logs"
	@echo "  status           - Show container status"
	@echo ""
	@echo "Version and Release Commands:"
	@echo "  update-version   - Update version in package.json (e.g., make update-version TAG=1.0.0)"
	@echo "  commit-version   - Commit version changes (e.g., make commit-version TAG=1.0.0)"
	@echo "  tag-version      - Create and push a Git tag (e.g., make tag-version TAG=1.0.0)"
	@echo "  tag-and-push     - Complete process: update version, commit, tag and push (e.g., make tag-and-push TAG=1.0.0)"
	@echo "  docker-push      - Manually build and push Docker image (e.g., make docker-push TAG=1.0.0)"
	@echo ""
	@echo "Environment:"
	@echo "  NODE_VERSION = $(NODE_VERSION)"
	@echo "  BUILD_MODE   = $(BUILD_MODE)"
	@echo "  PORT         = $(PORT)"
	@echo "  DEV_PORT     = $(DEV_PORT)"