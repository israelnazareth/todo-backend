FROM node:18

WORKDIR /app

COPY package.json tsconfig.json nodemon.json ./
RUN npm install

COPY src ./src

EXPOSE 5000

CMD ["npm", "run", "dev"]
