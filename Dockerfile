FROM golang:1.21-alpine

# Install Hugo
ENV HUGO_VERSION=0.121.1
RUN apk add --no-cache git curl && \
    curl -L https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz | tar -xz -C /usr/local/bin hugo && \
    chmod +x /usr/local/bin/hugo

WORKDIR /src

# Expose default Hugo port
EXPOSE 1313

# Default command
CMD ["hugo", "server", "--bind=0.0.0.0", "--disableFastRender", "--poll=700ms"]
