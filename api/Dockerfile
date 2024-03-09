FROM node:alpine AS builder
    WORKDIR /portaria
    COPY package*.json ./
    COPY conf_*.json ./
    RUN npm install
    COPY . .
    RUN npm run build
