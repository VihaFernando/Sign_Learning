
FROM node:latest 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 8000

CMD ["node", "server.js"]
