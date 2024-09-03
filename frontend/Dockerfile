# Node.js lts image
FROM node:lts

# ワーキングディレクトリを指定
WORKDIR /usr/src/app

# package.jsonとpackage-lock.jsonを先にコピーして依存関係をインストール
COPY package*.json ./
RUN npm install

# そのほかの同一ディレクトリ内のファイルを全てコピー
COPY . .

# 3000番ポートでリッスン
EXPOSE 3000

# React の起動
CMD ["npm", "run", "dev"]