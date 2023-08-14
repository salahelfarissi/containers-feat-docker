FROM node:18-bookworm
USER node
WORKDIR /home/app/src
COPY --chown=node:node . /home/app/src
CMD node index.js