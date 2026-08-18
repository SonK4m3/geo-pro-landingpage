FROM node:24-alpine AS build
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:24-alpine AS production
WORKDIR /app

COPY --from=build /app/package.json /app/package-lock.json* ./
COPY --from=build /app/dist ./dist
RUN npm ci --omit=dev

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "dist/server/entry.mjs"]
