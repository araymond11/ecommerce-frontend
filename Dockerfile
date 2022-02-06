FROM node:16.6.2

WORKDIR /app/src

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn run build

# Install serve command for yarn package manager
RUN yarn global add serve

CMD ["serve", "-s", "build", "-l", "3000"]