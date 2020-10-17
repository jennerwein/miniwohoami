FROM node:12-alpine

COPY . .
RUN npm install

EXPOSE 8080
ENTRYPOINT ["node", "miniwhoami.js"]

