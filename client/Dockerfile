FROM node:16.17.1

WORKDIR /app

ADD package.json .
ADD yarn.lock .

RUN yarn install

COPY . .

CMD ["yarn", "start"]
