"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

interface ScrollRevealOptions {
  threshold?: number;
  once?: boolean;
  margin?: `${number}px ${number}px ${number}px ${number}px`;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { threshold = 0.15, once = true, margin = "0px 0px -50px 0px" as const } = options;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold,
    margin,
  });

  return { ref, isInView };
}
