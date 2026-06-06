'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex items-center justify-center p-8 bg-[#0a1612] text-[#f0faf2]">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">エラーが発生しました</h2>
          <p className="mb-6 opacity-80">ページの読み込みに失敗しました。</p>
          <button
            type="button"
            onClick={() => reset()}
            className="px-6 py-3 rounded-full bg-[#1e6b45] text-white font-medium"
          >
            再試行
          </button>
        </div>
      </body>
    </html>
  );
}
