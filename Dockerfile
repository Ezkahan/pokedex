FROM node:19-alpine3.16 AS builder
ENV NODE_ENV production
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:1.23.2-alpine AS production
ENV NODE_ENV production
COPY --from=builder /app/build /var/www/pokedex
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]