FROM node:alpine AS base_image
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve Angular application using nginx
FROM nginx:alpine
COPY --from=base_image /app/dist/app/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]