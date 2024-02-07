FROM node:18.19.0-bookworm-slim

WORKDIR /app

ADD package.json .
ADD yarn.lock .

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["yarn", "dev"]
