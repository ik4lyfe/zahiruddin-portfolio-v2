'use client';
import { useEffect, useRef, useState } from 'react';

export default function Counter({ value, prefix = '', suffix = '', decimals = 0, label }: { value: number; prefix?: string; suffix?: string; decimals?: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setDisplay(value * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(tick);
            else setDisplay(value);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-4xl md:text-5xl text-navy dark:text-gold">
        {prefix}
        {display.toFixed(decimals)}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">{label}</div>
    </div>
  );
}
