'use client';

import { useState, useEffect } from 'react';

const PASSWORD = 'metanature2026';

export default function PresentationPage() {
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('presentation_unlocked') === '1') {
      setUnlocked(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem('presentation_unlocked', '1');
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput('');
    }
  };

  if (unlocked) {
    return (
      <iframe
        src="/_slides/index.html"
        className="fixed inset-0 w-full h-full border-0"
        title="中間発表資料"
        allow="autoplay"
      />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 w-full max-w-sm shadow-2xl text-white text-center">
        <div className="text-4xl mb-4">🎓</div>
        <h1 className="text-xl font-bold mb-1">博士論文 中間発表資料</h1>
        <p className="text-sm text-white/60 mb-8">Ukyo Nagata · 2026年6月</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={input}
            onChange={e => { setInput(e.target.value); setError(false); }}
            placeholder="パスワードを入力"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white/40 text-center tracking-widest"
            autoFocus
          />
          {error && (
            <p className="text-red-400 text-sm">パスワードが違います</p>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-white/90 transition"
          >
            入室する
          </button>
        </form>
      </div>
    </div>
  );
}
