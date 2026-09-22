import React, { useEffect, useRef } from 'react';

interface ParticleTextProps {
  words?: string[];
  intervalMs?: number;
}

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  targetAlpha: number;
}

const DEFAULT_WORDS = ['future', 'software', 'systems', 'platforms', 'solutions'];

const PALETTE = [
  '#2563eb', // royal corporate blue
  '#0284c7', // tech azure
  '#38bdf8', // sky cyan
  '#7dd3fc', // ice cyan
  '#ffffff', // sparkle white
  '#60a5fa', // bright blue
];

const pickColor = (ratio: number): string => {
  // Gradient from blue on left to sky blue / cyan on right with occasional sparkle
  if (Math.random() < 0.12) return '#ffffff';
  if (ratio < 0.3) return Math.random() < 0.5 ? '#2563eb' : '#3b82f6';
  if (ratio < 0.7) return Math.random() < 0.5 ? '#0284c7' : '#60a5fa';
  return Math.random() < 0.5 ? '#38bdf8' : '#7dd3fc';
};

const ParticleText: React.FC<ParticleTextProps> = ({
  words = DEFAULT_WORDS,
  intervalMs = 3200,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let wordTimer: ReturnType<typeof setInterval>;
    let currentWordIndex = 0;
    let particles: Particle[] = [];

    const getLayout = () => {
      const w = window.innerWidth;
      if (w < 480) {
        return { fontSize: 44, width: 230, height: 60, step: 2 };
      } else if (w < 768) {
        return { fontSize: 56, width: 310, height: 75, step: 3 };
      } else if (w < 1024) {
        return { fontSize: 72, width: 390, height: 95, step: 3 };
      } else {
        return { fontSize: 88, width: 480, height: 115, step: 3 };
      }
    };

    let layout = getLayout();

    const resizeCanvas = () => {
      layout = getLayout();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = layout.width * dpr;
      canvas.height = layout.height * dpr;
      canvas.style.width = `${layout.width}px`;
      canvas.style.height = `${layout.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Sample points from text using offscreen canvas
    const sampleWord = (word: string) => {
      const offscreen = document.createElement('canvas');
      offscreen.width = layout.width;
      offscreen.height = layout.height;
      const offCtx = offscreen.getContext('2d', { willReadFrequently: true });
      if (!offCtx) return [];

      offCtx.font = `700 ${layout.fontSize}px "Space Grotesk", sans-serif`;
      offCtx.fillStyle = '#ffffff';
      offCtx.textAlign = 'left';
      offCtx.textBaseline = 'middle';
      offCtx.fillText(word, 8, layout.height / 2);

      const imgData = offCtx.getImageData(0, 0, layout.width, layout.height);
      const data = imgData.data;
      const points: { x: number; y: number; ratio: number }[] = [];

      for (let y = 0; y < layout.height; y += layout.step) {
        for (let x = 0; x < layout.width; x += layout.step) {
          const idx = (y * layout.width + x) * 4;
          if (data[idx + 3] > 120) {
            points.push({
              x,
              y,
              ratio: x / layout.width,
            });
          }
        }
      }
      return points;
    };

    // Transition particle system to a new word
    const morphToWord = (word: string, isInitial = false) => {
      const points = sampleWord(word);
      if (points.length === 0) return;

      // Adjust particle count to match sample points
      while (particles.length < points.length) {
        const randAngle = Math.random() * Math.PI * 2;
        const randDist = Math.random() * 50 + 20;
        particles.push({
          x: layout.width / 2 + Math.cos(randAngle) * randDist,
          y: layout.height / 2 + Math.sin(randAngle) * randDist,
          targetX: layout.width / 2,
          targetY: layout.height / 2,
          vx: (Math.random() - 0.5) * 10,
          vy: (Math.random() - 0.5) * 10,
          size: Math.random() * 1.5 + 1.2,
          color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
          alpha: 0,
          targetAlpha: Math.random() * 0.3 + 0.7,
        });
      }

      // Assign targets and apply particle explosion impulse
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (i < points.length) {
          const pt = points[i];
          p.targetX = pt.x;
          p.targetY = pt.y;
          p.color = pickColor(pt.ratio);
          p.targetAlpha = Math.random() * 0.3 + 0.75;

          if (!isInitial) {
            // Disperse outward with explosion velocity
            const angle = Math.random() * Math.PI * 2;
            const force = Math.random() * 14 + 4;
            p.vx += Math.cos(angle) * force;
            p.vy += Math.sin(angle) * force;
          }
        } else {
          // Extra particles dissolve away
          p.targetAlpha = 0;
          p.vx += (Math.random() - 0.5) * 8;
          p.vy += (Math.random() - 0.5) * 8;
        }
      }
    };

    // Initial word
    morphToWord(words[currentWordIndex], true);

    // Continuous word transform interval
    wordTimer = setInterval(() => {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      morphToWord(words[currentWordIndex], false);
    }, intervalMs);

    // Animation frame loop
    const render = () => {
      ctx.clearRect(0, 0, layout.width, layout.height);

      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Spring force towards target point
        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        p.vx += dx * 0.085;
        p.vy += dy * 0.085;

        // Damping
        p.vx *= 0.81;
        p.vy *= 0.81;

        // Mouse interactive repel force
        if (mouse.active) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const dist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (dist < 55 && dist > 0) {
            const force = ((55 - dist) / 55) * 5;
            p.vx += (mdx / dist) * force;
            p.vy += (mdy / dist) * force;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        // Alpha fade transition
        p.alpha += (p.targetAlpha - p.alpha) * 0.1;

        if (p.alpha > 0.02) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Mouse handlers for interactive particle repel
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(wordTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, [words, intervalMs]);

  return (
    <span className="inline-block relative align-middle my-[-8px]">
      <canvas
        ref={canvasRef}
        className="cursor-crosshair block"
        style={{
          filter: 'drop-shadow(0 0 10px rgba(56, 189, 248, 0.45)) drop-shadow(0 0 20px rgba(37, 99, 235, 0.3))',
        }}
        aria-label="Dynamic transforming tech keywords"
      />
    </span>
  );
};

export default ParticleText;
