import React, { useState, useEffect, useRef } from 'react';
import { IS_INDEPENDENCE_DAY } from '../constants';

interface KineticTextProps {
  words?: string[];
  intervalMs?: number;
}

const DEFAULT_WORDS = ['future', 'software', 'systems', 'platforms', 'solutions'];

const KineticText: React.FC<KineticTextProps> = ({
  words = DEFAULT_WORDS,
  intervalMs = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [widths, setWidths] = useState<number[]>([]);
  const measureRef = useRef<HTMLDivElement | null>(null);

  // Measure exact widths of each word using offscreen container
  useEffect(() => {
    const measure = () => {
      if (!measureRef.current) return;
      const spans = measureRef.current.children;
      const newWidths: number[] = [];
      for (let i = 0; i < spans.length; i++) {
        newWidths.push(Math.ceil((spans[i] as HTMLElement).getBoundingClientRect().width));
      }
      setWidths(newWidths);
    };

    measure();
    window.addEventListener('resize', measure);
    const t1 = setTimeout(measure, 100);
    const t2 = setTimeout(measure, 400);
    return () => {
      window.removeEventListener('resize', measure);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [words]);

  // Word cycling
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(currentIndex);
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % words.length);

      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setPrevIndex(null);
      }, 650);

      return () => clearTimeout(timeout);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [currentIndex, words.length, intervalMs]);

  const currentWidth = widths[currentIndex];

  const gradientClass = IS_INDEPENDENCE_DAY
    ? 'from-green-400 via-white to-green-500'
    : 'from-suvora-primary via-blue-500 to-suvora-accent';

  return (
    <>
      {/* Hidden container to measure exact word widths with font inheritance */}
      <div
        ref={measureRef}
        aria-hidden="true"
        className="absolute pointer-events-none opacity-0 select-none -z-50 whitespace-nowrap"
        style={{ font: 'inherit', letterSpacing: 'inherit' }}
      >
        {words.map((word) => (
          <span key={word} className="inline-block">
            {word}
          </span>
        ))}
      </div>

      {/* Kinetic Viewport with In-Flow Invisible Anchor for Perfect Baseline Alignment */}
      <span
        className="relative inline-block overflow-hidden align-baseline select-none"
        style={{
          width: currentWidth ? `${currentWidth}px` : 'auto',
          transition: 'width 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Natural in-flow anchor (invisible) sets the exact line height and baseline */}
        <span className="invisible opacity-0 select-none pointer-events-none block whitespace-nowrap" aria-hidden="true">
          {words[currentIndex]}
        </span>

        {/* Outgoing Word */}
        {prevIndex !== null && isTransitioning && (
          <span
            key={`prev-${words[prevIndex]}`}
            className={`absolute left-0 top-0 bottom-0 flex items-center text-transparent bg-clip-text bg-gradient-to-r ${gradientClass} whitespace-nowrap`}
            style={{
              animation: 'kineticSlideOut 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              willChange: 'transform, filter, opacity',
              filter: 'drop-shadow(0 0 16px rgba(37, 99, 235, 0.35))',
            }}
          >
            {words[prevIndex]}
          </span>
        )}

        {/* Incoming / Active Word */}
        <span
          key={`curr-${words[currentIndex]}`}
          className={`absolute left-0 top-0 bottom-0 flex items-center text-transparent bg-clip-text bg-gradient-to-r ${gradientClass} whitespace-nowrap`}
          style={{
            animation: prevIndex !== null ? 'kineticSlideIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
            willChange: 'transform, filter, opacity',
            filter: 'drop-shadow(0 0 16px rgba(37, 99, 235, 0.35))',
          }}
        >
          {words[currentIndex]}
        </span>
      </span>
    </>
  );
};

export default KineticText;
