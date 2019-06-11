FROM node:10-alpine
WORKDIR /opt/synemabot
COPY package* ./
RUN npm ci
COPY index.js ./
CMD node index.js