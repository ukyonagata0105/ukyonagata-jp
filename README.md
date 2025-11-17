# Ukyo Nagata Portfolio

ukyonagata.jpの個人ポートフォリオサイトです。Next.js 15、TypeScript、Tailwind CSSで構築されています。

## 主な機能

- 📱 完全レスポンシブデザイン
- 🌓 ダークモード対応（ライト/ダーク/システム設定）
- ⚡ Next.js 15 + Turbopackによる高速ビルド
- 🎨 Tailwind CSS 4によるモダンなスタイリング
- 🔤 Geistフォントファミリーを使用

## Getting Started

開発サーバーを起動:

```bash
pnpm dev
# または
npm run dev
# または
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## ダークモード

ダークモード機能の詳細については、[THEME_IMPLEMENTATION.md](./THEME_IMPLEMENTATION.md)を参照してください。

### 使い方
- ページ右上のテーマ切り替えボタンをクリック
- ライトモード ↔ ダークモード ↔ システム設定の順で切り替わります
- 設定はローカルストレージに保存されます

## プロジェクト構成

```
src/
├── app/
│   ├── layout.tsx       # ルートレイアウト
│   ├── page.tsx         # ホームページ
│   ├── providers.tsx    # テーマプロバイダー
│   └── globals.css      # グローバルスタイル
└── components/
    └── ThemeToggle.tsx  # テーマ切り替えボタン
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
