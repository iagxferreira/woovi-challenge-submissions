# ------------ STAGE 1: Build ------------
FROM node:22-alpine AS builder
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY pnpm-lock.yaml package.json ./
RUN pnpm install
COPY . .
RUN pnpm build

FROM node:22-alpine AS runner
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY --from=builder /dist ./dist
COPY --from=builder /node_modules ./node_modules
COPY --from=builder /package.json ./package.json
EXPOSE 3000
CMD ["pnpm", "start"]
