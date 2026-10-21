FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build
# Cloudflare 100 MB/blob a registry előtt — a teljes public egy rétegben 413.
RUN mkdir -p /public-rest \
 && cd /app/public \
 && for x in *; do \
      case "$x" in \
        szolgaltatasok|galeria|esetek|heroes|munkatarsak|models) ;; \
        *) cp -a "$x" /public-rest/ ;; \
      esac; \
    done

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public/szolgaltatasok ./public/szolgaltatasok
COPY --from=builder --chown=nextjs:nodejs /app/public/galeria ./public/galeria
COPY --from=builder --chown=nextjs:nodejs /app/public/esetek ./public/esetek
COPY --from=builder --chown=nextjs:nodejs /app/public/heroes ./public/heroes
COPY --from=builder --chown=nextjs:nodejs /app/public/munkatarsak ./public/munkatarsak
COPY --from=builder --chown=nextjs:nodejs /app/public/models ./public/models
COPY --from=builder --chown=nextjs:nodejs /public-rest ./public/
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
