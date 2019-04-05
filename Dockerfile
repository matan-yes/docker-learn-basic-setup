FROM node:11.13-alpine

COPY  package.json .

RUN npm install

COPY . .


CMD ["npm" , "run" ,"start"]
