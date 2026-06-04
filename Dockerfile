FROM node:20-alpine

RUN apk add --no-cache \
    ffmpeg \
    git \
    python3 \
    make \
    g++ \
    cairo-dev \
    pango-dev \
    jpeg-dev \
    giflib-dev \
    pixman-dev

RUN which ffmpeg && ffmpeg -version

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8000

EXPOSE 8000

CMD ["node", "index.js"]
