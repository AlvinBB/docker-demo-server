FROM node:10.12.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8086
CMD [ "npm", "start" ]