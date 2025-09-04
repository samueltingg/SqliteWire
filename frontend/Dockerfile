FROM node:22

WORKDIR /app

COPY package.json package-lock.json* ./

# ? why remove package-lock.json? when i just copy it?
RUN rm -rf package-lock.json \
    && npm install

COPY . .

RUN npm run build

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
