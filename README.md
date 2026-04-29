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

本番用にビルド (Chrome向け):
```sh
npm run build:chrome
```

本番用にビルド (Firefox向け):
```sh
npm run build:firefox
```

拡張機能のzipファイルを生成 (Chrome向け):
```sh
npm run zip:chrome
```

拡張機能のzipファイルを生成 (Firefox向け):
```sh
npm run zip:firefox
```

ビルド成果物の出力先:
- Chrome: `.output/chrome-mv3/`
- Firefox: `.output/firefox-mv2/`

## Firefoxアドオン提出 (Mozilla審査用)

このプロジェクトはバンドラ (Vite/Rollup) とミニファイア (esbuild) を使用しているため、 [addons.mozilla.org](https://addons.mozilla.org) への提出時にはソースコードの添付が必要。

### ビルド環境

- Node.js: v25.6.1 (mise管理、 [mise.toml](./mise.toml) 参照)
- npm: v11.9.0
- OS: macOS (Darwin) で動作確認

### 提出用zipの生成

`npm run zip:firefox` を実行すると、 `.output/` 配下に以下2つのzipが生成される:

- `chrome-extensions-bookshelf-<version>-firefox.zip` — 拡張機能本体 (AMOへのアップロード用)
- `chrome-extensions-bookshelf-<version>-sources.zip` — ソースコード (Mozillaレビュアー提出用)

```sh
npm run zip:firefox
```

### Mozillaレビュアー向けビルド手順

1. Node.js を上記バージョンでインストール
2. 依存関係をインストール
    ```sh
    npm install
    ```
3. Firefox向けにビルド
    ```sh
    npm run build:firefox
    ```
4. 成果物は `.output/firefox-mv2/` に出力される

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
