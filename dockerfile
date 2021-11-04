FROM node:16-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY public public
COPY src src

CMD ["npm", "start"]