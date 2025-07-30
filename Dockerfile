# Use the official Node.js 18 image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files into the container
COPY . .

# Expose the application port (default 8080)
EXPOSE 8080

# Set environment variable for port
ENV PORT=8080

# Start the server
CMD ["npm", "start"]
