.PHONY: help dev build clean clean-docker clean-all test stop

# Default target
help:
	@echo "Available commands:"
	@echo "  make dev          - Start development server with Docker (official Hugo image)"
	@echo "  make build        - Build Hugo site locally (requires Hugo installed)"
	@echo "  make test         - Build and validate site"
	@echo "  make clean        - Clean Hugo build artifacts"
	@echo "  make clean-docker - Clean Docker containers and images"
	@echo "  make clean-all    - Clean everything (Hugo + Docker)"
	@echo "  make stop         - Stop Docker containers"

# Development
dev:
	@echo "Starting Hugo development server (using official image)..."
	docker compose up

# Production build
build:
	@echo "Building Hugo site..."
	@hugo || (echo "Build failed! Cleaning up..." && $(MAKE) clean && exit 1)
	@echo "✓ Build successful"

# Testing
test: clean
	@echo "Building site for testing..."
	@hugo || (echo "Test build failed! Cleaning up..." && $(MAKE) clean && exit 1)
	@echo "Validating build..."
	@test -d public || (echo "✗ public/ directory not found" && exit 1)
	@test -f public/index.html || (echo "✗ index.html not found" && exit 1)
	@echo "✓ Validation passed"
	@$(MAKE) clean

# Clean Hugo artifacts
clean:
	@echo "Cleaning Hugo build artifacts..."
	@rm -rf public/ resources/ .hugo_build.lock
	@echo "✓ Hugo artifacts cleaned"

# Stop Docker containers
stop:
	@echo "Stopping Docker containers..."
	@docker compose down
	@echo "✓ Containers stopped"

# Clean Docker resources
clean-docker: stop
	@echo "Cleaning Docker resources..."
	@docker compose down -v --remove-orphans
	@docker system prune -f
	@echo "✓ Docker resources cleaned"

# Nuclear option - clean everything
clean-all: clean clean-docker
	@echo "✓ All artifacts cleaned"
