# Stage 0: Base stage with dependencies
FROM node:20-bullseye-slim AS base

# Install essential packages
RUN apt-get update && apt-get install -y \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*

# Create a non-root user
RUN useradd -ms /bin/bash nextjs
USER nextjs

# Stage 1: Development environment
FROM base AS development
USER root

# Install additional development dependencies
RUN apt-get update && apt-get install -y \
    procps \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Set up development environment
COPY package*.json ./
RUN chown -R nextjs:nextjs /app
RUN npm install
RUN mkdir -p .next && chown -R nextjs:nextjs .next

USER nextjs

# Expose development port
EXPOSE 3000

# Start development server with hot reload
CMD ["npm", "run", "dev"]

# Stage 2: Builder stage for production
FROM base AS builder

WORKDIR /app

# Copy the entire project directory
COPY --chown=nextjs:nextjs . .

# Build argument for controlling build mode
ARG IS_LOCAL=false
ENV IS_LOCAL=${IS_LOCAL}

# Install dependencies and build
RUN npm ci && \
    npm run build

# Stage 3: Production environment with Nginx
FROM nginx:alpine AS production

# Install curl for health checks
RUN apk add --no-cache curl

# Copy the built web app
COPY --from=builder /app/out /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Add health check
HEALTHCHECK --interval=30s --timeout=3s \
    CMD curl -f http://localhost/health || exit 1

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
