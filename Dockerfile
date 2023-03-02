#STAGE 1 BUILD REACT PROJECT
FROM node:latest AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

#STAGE 2 CREATE NGINX SERVER
FROM nginx:latest AS prod-stage
ENV REACT_APP_API_URL http://localhost:1234/rest/chatbot
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
