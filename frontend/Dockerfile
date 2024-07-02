# Use official Node.js image as base
FROM node:14

# Set working directory
WORKDIR /app/frontend

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Expose port
EXPOSE 3001

# Start React application
CMD ["npm", "start"]
