FROM node:16.13-alpine

# Create app directory
WORKDIR /usr/src/app


#  where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

CMD [ "npm", "start" ]

EXPOSE 3000