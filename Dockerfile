FROM node:18-bookworm
COPY . /app
WORKDIR /app
CMD node app.js