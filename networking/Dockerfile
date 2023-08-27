FROM alpine:3.15

RUN apk add --update nodejs npm

RUN addgroup -S node && adduser -S node -G node

USER node
WORKDIR /home/app/src

# Copying package.json and yarn.lock first to take advantage of Docker's caching mechanism
COPY --chown=node:node package.json package-lock.json ./

RUN npm ci

COPY --chown=node:node . .

CMD ["node", "index.js"]
