# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server to serve the build (like nginx or serve)
RUN npm install -g serve

# Expose port and start the app
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
# 1️⃣ Use an official Node.js lightweight image
FROM node:18-alpine

# 2️⃣ Set the working directory inside the container
WORKDIR /app

# 3️⃣ Copy only the package files first (to install dependencies faster)
COPY package*.json ./

# 4️⃣ Install node modules
RUN npm install

# 5️⃣ Now copy the rest of your app files (src, public, etc.)
COPY . .

# 6️⃣ Build the Vite app (not npm run build like CRA)
RUN npm run build

# 7️⃣ Install a simple static server to serve your built files
RUN npm install -g serve

# 8️⃣ Expose port 3000 (the port you will use to access the app)
EXPOSE 3000

# 9️⃣ Tell Docker how to start the app
CMD ["serve", "-s", "dist", "-l", "3000"]
