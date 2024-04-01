# Use an official Node.js LTS (Long Term Support) image as the base
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY frontend/package.json frontend/package-lock.json ./

# Install dependencies (including legacy peer dependencies)
RUN npm install --legacy-peer-deps

# Copy the rest of the frontend files to the working directory
COPY frontend ./

# Build the frontend application
RUN npm run build

# Expose the port your app runs on (if applicable)
# EXPOSE <port>

# Command to run the application
# CMD ["npm", "start"]
