FROM node

WORKDIR /app

COPY package*.json ./

RUN npm --version \
    && npm install

COPY dist ./

ENTRYPOINT [ "node", "main" ]
