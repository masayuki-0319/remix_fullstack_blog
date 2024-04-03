# Remix + Prisma フルスタックアプリケーション

## 開発環境の構築

開発環境用の環境変数を作成します。

```sh
cp .env.example .env
```

依存ライブラリをダウンロードします。

```sh
yarn install
```

開発用 DB の Docker イメージをダウンロードし、開発用 DB サーバを起動します。

```sh
docker compose up -d
```

DB をマイグレーションします。

```sh
yarn db:migrate
```

開発用サーバを起動します。

```sh
yarn dev
```

アプリを開き、画面を確認できたら構築完了です。

```sh
open http://localhost:5173/
```

## テスト

以下のコマンドを実行すると、テスト実行できます。

```sh
yarn test
```

## DB 操作コマンド

| コマンド              | 説明                                                      |
| --------------------- | --------------------------------------------------------- |
| yarn db:migrate       | 開発用とテスト用 DB をマイグレーションします              |
| yarn db:migrate:reset | 開発用とテスト用 DB をリセットします                      |
| yarn db:seed          | ./prisma/seed.ts を読み込み、初期データを DB に登録します |
