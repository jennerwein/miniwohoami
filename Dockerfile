FROM node:13-alpine

COPY . .
RUN npm install

EXPOSE 8080
ENTRYPOINT ["node", "miniwhoami.js"]

