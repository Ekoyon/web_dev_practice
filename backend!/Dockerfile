# Use official Node.js base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app (views, public, server.js, etc.)
COPY . .

# Expose the port your app runs on (change if different)
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
