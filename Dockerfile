ARG NODE_BASE=20.17.0-alpine

# Build stage
FROM node:$NODE_BASE AS build

WORKDIR /app

COPY . ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Build application
RUN pnpm run build

# Run stage
FROM nginx:1.27.3-alpine

RUN rm -rf /usr/share/nginx/html/*

# Copy application files
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY ./nginx/nginx.conf /etc/nginx

# Set dynamic env variables
COPY env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh

EXPOSE 80
