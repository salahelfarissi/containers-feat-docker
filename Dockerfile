FROM node:18-bookworm
USER node
WORKDIR /home/app/src
COPY --chown=node:node . .
RUN yarn install --frozen-lockfile
CMD ["yarn", "start"]
EXPOSE 3000
