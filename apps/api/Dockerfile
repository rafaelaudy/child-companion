# ---- STAGE 1: Build the application ----
FROM node:lts-bookworm-slim AS builder
RUN npm install -g pnpm
WORKDIR /app

COPY ../../pnpm-lock.yaml ./
COPY package.json ./

RUN pnpm install

COPY package.json ./
COPY apps/api/. .

# RUN pnpm run build

# ---- STAGE 2: Create a minimal production image ----
# FROM node:lts-bookworm-slim

# WORKDIR /app

# RUN npm install -g pnpm

# COPY --from=builder /app/pnpm-lock.yaml ./
# RUN pnpm fetch --prod

# COPY --from=builder /app/dist ./dist

# EXPOSE 4000

# CMD ["node", "dist/server.js"]