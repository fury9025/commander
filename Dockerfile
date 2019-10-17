FROM node:10

# Create app directory
WORKDIR /dir/src/app

# Install dependencies
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3010

CMD [ "node", "server.js"]
