# DEPRECATED: Custom Hugo Dockerfile
# 
# This Dockerfile is no longer used in the development workflow.
# We now use the official klakegg/hugo:ext-alpine image via docker-compose.yml
# to avoid architecture compatibility issues.
#
# Reason for deprecation:
# - The manual Hugo binary download (line 15) had architecture compatibility issues
# - The official image handles multi-architecture (amd64/arm64) automatically
# - Simpler maintenance and updates
#
# If you need a custom image in the future, consider using the official image
# as a base: FROM klakegg/hugo:ext-alpine
#
# Last working version: This file
# Migration date: 2025-12-12

# syntax=docker/dockerfile:1
# Best Practice: Use BuildKit syntax for better caching and features

# ============================================
# Stage 1: Builder
# ============================================
FROM golang:1.21-alpine AS builder

# Install Hugo (Extended version for SCSS support)
ENV HUGO_VERSION=0.121.1
RUN apk add --no-cache \
    git \
    curl \
    ca-certificates && \
    curl -L https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz \
    | tar -xz -C /usr/local/bin && \
    chmod +x /usr/local/bin/hugo && \
    hugo version

# ============================================
# Stage 2: Runtime (Development)
# ============================================
FROM alpine:3.19 AS runtime

# Install runtime dependencies
RUN apk add --no-cache \
    ca-certificates \
    git \
    tzdata

# Copy Hugo binary from builder
COPY --from=builder /usr/local/bin/hugo /usr/local/bin/hugo

# Create non-root user for security
RUN addgroup -g 1000 hugo && \
    adduser -D -u 1000 -G hugo hugo

# Set working directory
WORKDIR /src

# Change ownership to non-root user
RUN chown -R hugo:hugo /src

# Switch to non-root user
USER hugo

# Expose Hugo development server port
EXPOSE 1313

# Healthcheck to ensure Hugo server is running
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:1313 || exit 1

# Default command for development
CMD ["hugo", "server", \
    "--bind=0.0.0.0", \
    "--buildDrafts", \
    "--poll=700ms", \
    "--navigateToChanged"]
