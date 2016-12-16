FROM node:argon

RUN apt-get update
RUN apt-get install -y sendmail

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app

EXPOSE 8080

CMD ["npm", "start"]