"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt: string;
  afterAlt: string;
};

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Vorher",
  afterLabel = "Nachher",
  beforeAlt,
  afterAlt,
}: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(50);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setX(Math.max(2, Math.min(98, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!draggingRef.current) return;
      const clientX =
        "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      setFromClientX(clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [setFromClientX]);

  const onDown = (e: React.MouseEvent | React.TouchEvent) => {
    draggingRef.current = true;
    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    setFromClientX(clientX);
  };

  return (
    <div className="select-none">
      <div
        ref={frameRef}
        onMouseDown={onDown}
        onTouchStart={onDown}
        className="relative aspect-[16/10] w-full cursor-ew-resize overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
        role="slider"
        aria-label="Vorher-Nachher-Vergleich"
        aria-valuenow={Math.round(x)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* Before (full) */}
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          priority
          className="object-cover object-top pointer-events-none"
          sizes="(max-width: 768px) 100vw, 70vw"
        />
        {/* After (clipped by x%) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 0 0 ${x}%)` }}
        >
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 70vw"
          />
        </div>

        {/* Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)] pointer-events-none"
          style={{ left: `${x}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg ring-4 ring-white/60">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </div>
        </div>

        {/* Floating labels */}
        <span className="absolute left-3 top-3 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-500 backdrop-blur">
          {beforeLabel}
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-gradient-to-br from-blue-500 to-cyan-500 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-white shadow-md">
          {afterLabel}
        </span>
      </div>

      <p className="mt-3 text-center text-xs font-mono uppercase tracking-[0.12em] text-slate-400">
        ◁ Handle ziehen · Vorher / Nachher ▷
      </p>
    </div>
  );
}
