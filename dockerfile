FROM node:16-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY .eslintrc.json ./

RUN npm install

COPY public public
COPY src src
ENV GENERATE_SOURCEMAP=false

CMD ["npm", "start"]