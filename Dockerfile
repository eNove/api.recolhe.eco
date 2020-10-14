FROM node:12.18

WORKDIR /app

COPY package.json npm-shrinkwrap.json /app/
RUN npm install --production

COPY . /app/

EXPOSE 3000

CMD [ "node", "server.js" ]