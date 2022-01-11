FROM node:alpine
EXPOSE 3000
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install
USER 1000
CMD ["npm", "run", "start"]