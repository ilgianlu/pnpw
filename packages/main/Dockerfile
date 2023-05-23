FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY node_modules ./node_modules
COPY index.js .
COPY config ./config

CMD ["npm", "start"]