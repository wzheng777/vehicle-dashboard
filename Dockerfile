# Use an official Node.js runtime as a base image
FROM node

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Build the React application
RUN npm run build

# Use a lightweight web server for serving the static files
FROM nginx:alpine

# Copy the build files to the Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
