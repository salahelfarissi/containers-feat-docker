FROM node:18-bookworm

USER node
WORKDIR /home/app/src

# Copying package.json and yarn.lock first to take advantage of Docker's caching mechanism
COPY --chown=node:node package.json yarn.lock ./

# This is equivl=aent to npm ci
RUN yarn install --frozen-lockfile

COPY --chown=node:node . .

# This is not required 
EXPOSE 3000
CMD ["yarn", "start"]
