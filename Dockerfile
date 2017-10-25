FROM node:slim

MAINTAINER alaxallves@gmail.com

RUN apt-get update
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash - && apt-get install -y nodejs tree libfontconfig bzip2 && npm install --quiet --global vue-cli

RUN mkdir /Falko-2017.2-FrontEnd

COPY . /Falko-2017.2-FrontEnd

WORKDIR /Falko-2017.2-FrontEnd

ADD package.json /Falko-2017.2-FrontEnd/package.json

RUN npm install