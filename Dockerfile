FROM node:18
WORKDIR /app
EXPOSE 8000
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
CMD yarn start
