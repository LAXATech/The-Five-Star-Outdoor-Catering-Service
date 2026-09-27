import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  useSeparator?: boolean;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 1800,
  suffix = '',
  prefix = '',
  useSeparator = false,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          let startTime: number | null = null;

          const easeOutCubic = (t: number): number => {
            return 1 - Math.pow(1 - t, 3);
          };

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);

            const currentVal = Math.floor(easedProgress * end);
            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [end, duration]);

  const formattedCount = useSeparator
    ? new Intl.NumberFormat('en-IN').format(count)
    : count.toString();

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
};
