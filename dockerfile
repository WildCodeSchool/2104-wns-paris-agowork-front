FROM node:alpine

RUN mkdir /app
WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY schema.faker.graphql ./

RUN npm install

COPY public public
COPY src src

CMD ["npm", "start"]