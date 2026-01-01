# Bookshelf

Chrome拡張機能でブックマークを管理するアプリケーション

## Tech Stack

- [WXT](https://wxt.dev/) - Chrome拡張機能開発フレームワーク
- [React](https://react.dev/) - UIフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全な開発
- [Chakra UI](https://chakra-ui.com/) - UIコンポーネントライブラリ
- [Vite](https://vitejs.dev/) - 高速ビルドツール

## Getting Started

### Installation

1. リポジトリをクローン
    ```sh
    git clone git@github.com:kkznch/chrome-extensions-bookshelf.git
    cd chrome-extensions-bookshelf
    ```

2. 依存関係をインストール
    ```sh
    npm install
    ```

3. WXTの型定義を生成
    ```sh
    npm run wxt:prepare
    ```

### Development

開発サーバーを起動:
```sh
npm run dev
```

ビルド後、Chromeの拡張機能管理画面で `.output/chrome-mv3` ディレクトリを読み込んでください。

### Build

本番用にビルド:
```sh
npm run build
```

拡張機能のzipファイルを生成:
```sh
npm run zip
```

## Project Structure

```
chrome-extensions-bookshelf/
├── src/
│   ├── entrypoints/           # エントリーポイント
│   │   ├── background.ts      # バックグラウンドスクリプト
│   │   └── popup/             # ポップアップUI
│   ├── components/            # Reactコンポーネント
│   └── hooks/                 # カスタムフック
├── public/                    # 静的ファイル (アイコンなど)
├── wxt.config.ts             # WXT設定
└── tsconfig.json             # TypeScript設定
```
