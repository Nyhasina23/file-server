
FROM node:alpine3.15 as production
ENV ENV='production'
COPY . /
RUN npm install
CMD ["node", "index.js"]
