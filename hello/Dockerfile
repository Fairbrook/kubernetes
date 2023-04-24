FROM node:20-alpine3.16

RUN npm install -g pnpm
RUN mkdir -p ~/app
WORKDIR ~/app

COPY . .

RUN pnpm install --prod

CMD ["pnpm", "start"]
