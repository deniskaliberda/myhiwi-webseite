'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface QuizStepProps {
  question: string;
  subtitle?: string;
  direction: 'forward' | 'backward';
  children: ReactNode;
}

export default function QuizStep({ question, subtitle, direction, children }: QuizStepProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, [question]);

  return (
    <div
      key={question}
      className={direction === 'forward' ? 'animate-slide-in-right' : 'animate-slide-in-left'}
    >
      <h3
        ref={headingRef}
        tabIndex={-1}
        className="font-heading text-xl md:text-2xl font-bold tracking-tight text-slate-900 mb-2 outline-none"
      >
        {question}
      </h3>
      {subtitle && (
        <p className="text-slate-500 mb-6">{subtitle}</p>
      )}
      {!subtitle && <div className="mb-6" />}
      {children}
    </div>
  );
}
