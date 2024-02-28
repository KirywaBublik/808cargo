FROM node:20.10.0-alpine
WORKDIR /app
COPY ./package.json .
RUN yarn
COPY . .
CMD ["yarn", "dev"]