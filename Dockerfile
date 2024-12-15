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
FROM node:$NODE_BASE

# Add serve module
RUN npm install -g serve

# Copy application files
COPY --from=build /app/dist /dist

EXPOSE $PORT

CMD ["serve", "-s", "dist"]