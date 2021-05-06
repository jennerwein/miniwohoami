FROM node:13-alpine

COPY . .
RUN npm install

EXPOSE 80
ENTRYPOINT ["node", "miniwhoami.js"]

