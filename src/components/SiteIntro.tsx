'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { PLANE_NOSE_OFFSET, PLANE_SHAPE } from '@/lib/planeShape';

type SiteIntroProps = {
  name: string;
  subtitle: string;
  skipLabel: string;
};

const INTRO_DURATION_MS = 4200;
const TRAIL_PATH =
  'M -40 280 C 120 80, 240 360, 380 200 C 520 80, 640 300, 780 160 C 920 60, 1060 140, 1200 100';
const PLANE_MOTION = `<g class="site-intro-plane-inner" transform="${PLANE_NOSE_OFFSET}"><path class="site-intro-plane" d="${PLANE_SHAPE}"/><animateMotion dur="2.8s" begin="0.15s" fill="freeze" rotate="auto" calcMode="spline" keyTimes="0;1" keySplines="0.37 0 0.63 1"><mpath href="#siteIntroTrail"/></animateMotion></g>`;

const PLANE_STATIC = `<g class="site-intro-plane-inner site-intro-plane-static" transform="${PLANE_NOSE_OFFSET}"><path class="site-intro-plane" d="${PLANE_SHAPE}"/></g>`;

export function SiteIntro({ name, subtitle, skipLabel }: SiteIntroProps) {
  const [phase, setPhase] = useState<'playing' | 'exiting' | 'hidden'>('playing');
  const [reduceMotion, setReduceMotion] = useState(false);
  const startedRef = useRef(false);

  const dismiss = useCallback(() => {
    setPhase('exiting');
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    document.body.style.overflow = 'hidden';
    const timer = window.setTimeout(dismiss, INTRO_DURATION_MS);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [dismiss]);

  useEffect(() => {
    if (phase !== 'exiting') return;
    const timer = window.setTimeout(() => setPhase('hidden'), 650);
    return () => window.clearTimeout(timer);
  }, [phase]);

  if (phase === 'hidden') return null;

  return (
    <div
      className={`site-intro-root ${phase === 'exiting' ? 'site-intro-exiting' : ''}`}
      role="dialog"
      aria-label={name}
      onClick={dismiss}
    >
      <div className="site-intro-sky" aria-hidden="true" />

      <svg
        className="site-intro-plane-svg"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          id="siteIntroTrail"
          d={TRAIL_PATH}
          fill="none"
          className="site-intro-trail"
          strokeWidth="3"
          strokeDasharray="10 8"
          pathLength={100}
        />
        <g
          className="site-intro-plane-wrap"
          dangerouslySetInnerHTML={{
            __html: reduceMotion ? PLANE_STATIC : PLANE_MOTION,
          }}
        />
      </svg>

      <div className="site-intro-content">
        <p className="site-intro-eyebrow">Ukyo Nagata</p>
        <h2 className="site-intro-name">{name}</h2>
        <p className="site-intro-subtitle">{subtitle}</p>
      </div>

      <button
        type="button"
        className="site-intro-skip"
        onClick={(e) => {
          e.stopPropagation();
          dismiss();
        }}
      >
        {skipLabel}
      </button>
    </div>
  );
}
