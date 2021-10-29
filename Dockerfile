FROM node:latest

COPY package.json .
RUN npm i

COPY . .

ENV G_KEY yourGoogleApiKey

EXPOSE 5000

CMD npm run dev