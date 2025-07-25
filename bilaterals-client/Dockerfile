#################### BUILD STAGE ####################
FROM node:20-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --ignore-scripts

COPY src ./src
COPY angular.json ./
COPY tsconfig*.json ./
COPY .browserslistrc ./
COPY public ./public
COPY eslint.config.js ./

# Build in dev mode as per team requirement
RUN npm run build

#################### TESTING STAGE ####################
FROM node:20-alpine AS test

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --ignore-scripts

COPY src ./src
COPY angular.json ./
COPY tsconfig*.json ./
COPY .browserslistrc ./
COPY public ./public
COPY eslint.config.js ./

# Run tests (adjust the script if needed)
CMD ["npm", "run", "test:coverage"]

#################### PRODUCTION STAGE ####################
FROM nginx:alpine

# Clean default Nginx html
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built Angular app from build stage
COPY --from=build /usr/src/app/dist/bilaterals-client/browser /usr/share/nginx/html

# Permissions
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]