FROM node:16.16.0 as builder

WORKDIR /app

COPY ./package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

# Servez l'application avec NGINX
FROM nginx:alpine

# Modification des autorisations du répertoire
RUN mkdir -p /var/cache/nginx/client_temp \
    && chown -R nginx:nginx /var/cache/nginx \
    && touch /var/run/nginx.pid \
    && chown nginx:nginx /var/run/nginx.pid

COPY --from=builder /app/dist/* /usr/share/nginx/html

# Utilisateur pour exécuter NGINX
USER nginx
