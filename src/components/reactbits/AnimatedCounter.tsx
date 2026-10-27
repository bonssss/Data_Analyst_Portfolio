"use client";

import React, { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  value: string | number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 1500,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extract numeric part and format
  const rawString = String(value);
  const numericMatch = rawString.replace(/[^0-9.]/g, "");
  const targetNumber = parseFloat(numericMatch) || 0;
  const isFloat = numericMatch.includes(".");
  const decimalPlaces = isFloat ? numericMatch.split(".")[1].length : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = targetNumber * easeOut;

            if (isFloat) {
              setDisplayValue(current.toFixed(decimalPlaces));
            } else {
              setDisplayValue(Math.floor(current).toLocaleString());
            }

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              if (isFloat) {
                setDisplayValue(targetNumber.toFixed(decimalPlaces));
              } else {
                setDisplayValue(targetNumber.toLocaleString());
              }
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, duration, hasAnimated, isFloat, decimalPlaces]);

  return (
    <span ref={countRef} className={`tabular-nums ${className}`}>
      {prefix}
      {hasAnimated ? displayValue : rawString}
      {suffix}
    </span>
  );
}
