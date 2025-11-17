# ダークモード実装ドキュメント

## 概要
このプロジェクトには、ライト/ダーク/システム設定の3つのテーマモードを切り替えられる完全なダークモード機能が実装されています。

## 実装ファイル

### 1. `src/app/providers.tsx`
- **ThemeProvider**: Reactコンテキストを使用したテーマ管理プロバイダー
- **useTheme**: テーマの状態と切り替え関数を提供するカスタムフック

**主な機能:**
- システムのダークモード設定の自動検出
- ローカルストレージでのテーマ設定の永続化
- ライト/ダーク/システムの3モード対応

### 2. `src/components/ThemeToggle.tsx`
- テーマ切り替えボタンコンポーネント
- 現在のテーマに応じたアイコン表示
  - ☀️ ライトモード
  - 🌙 ダークモード
  - 💻 システム設定

### 3. `src/app/layout.tsx`
- ThemeProviderの統合
- `suppressHydrationWarning`属性の追加（ハイドレーションエラー防止）

### 4. `src/app/page.tsx`
- `'use client'`ディレクティブの追加（クライアントコンポーネント化）
- ヘッダーにThemeToggleコンポーネントを配置

## 使用方法

### ユーザー向け
1. ページ右上のテーマ切り替えボタンをクリック
2. 以下の順で切り替わります：
   - ライトモード → ダークモード → システム設定 → ライトモード...
3. 選択したテーマ設定はブラウザに保存され、次回訪問時も適用されます

### 開発者向け

#### 他のコンポーネントでテーマを使用する場合

```tsx
'use client';

import { useTheme } from '@/app/providers';

export function MyComponent() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  
  return (
    <div>
      <p>現在のテーマ設定: {theme}</p>
      <p>実際に適用されているテーマ: {resolvedTheme}</p>
      <button onClick={() => setTheme('dark')}>
        ダークモードに切り替え
      </button>
    </div>
  );
}
```

## 技術仕様

### テーマモード
- `light`: 常にライトモード
- `dark`: 常にダークモード
- `system`: OSのダークモード設定に従う

### ストレージ
- キー: `theme`
- 保存場所: `localStorage`
- 値: `'light' | 'dark' | 'system'`

### Tailwindクラス
既存の`dark:`プレフィックスをそのまま使用できます。
```tsx
<div className="bg-white dark:bg-gray-900">
  <!-- ライトモードでは白背景、ダークモードではグレー背景 -->
</div>
```

## ブラウザ対応
- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- モバイルブラウザ: ✅

## テスト

### 手動テスト項目
- [ ] テーマボタンをクリックして3つのモードが切り替わる
- [ ] ページをリロードしてもテーマ設定が保持される
- [ ] システムモードでOSの設定変更に追従する
- [ ] すべてのページセクションが適切にスタイリングされる
- [ ] ダークモードでのコントラストが十分である

## トラブルシューティング

### テーマが保存されない
- ブラウザのlocalStorageが有効か確認
- プライベートブラウジングモードでは保存されない場合があります

### ハイドレーションエラー
- `<html>`タグに`suppressHydrationWarning`が追加されているか確認
- コンポーネントに`'use client'`ディレクティブがあるか確認

### スタイルが適用されない
- Tailwind CSSの`darkMode: 'class'`設定を確認（デフォルトで有効）
- すべての要素に適切な`dark:`プレフィックスクラスがあるか確認

