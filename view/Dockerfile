FROM node:current-alpine3.12

WORKDIR /app
COPY package.json ./
RUN npm config set @eui:registry https://arm.lmera.ericsson.se/artifactory/api/npm/proj-e-uisdk-npm-local/
RUN npm config set @eds:registry https://arm.rnd.ki.sw.ericsson.se/artifactory/api/npm/proj-eds-npm-local/
RUN npm config set proxy=http://www-proxy.lmera.ericsson.se:8080
RUN npm config set https-proxy=http://www-proxy.lmera.ericsson.se:8080
RUN npm install --legacy-peer-deps
COPY . ./
RUN npm run build

CMD ["npm", "run", "start"]
