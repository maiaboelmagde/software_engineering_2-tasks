FROM node:14-alpine
WORKDIR /first_task
COPY first_task.js package*.json ./
RUN npm install
COPY . .
EXPOSE 50000
CMD node first_task.js