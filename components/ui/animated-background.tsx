'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles: HTMLDivElement[] = [];
    const particleCount = 50;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 bg-white/10 rounded-full';
      containerRef.current.appendChild(particle);
      particles.push(particle);

      // Random initial position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
    }

    // Animate particles
    particles.forEach((particle) => {
      anime({
        targets: particle,
        translateX: () => anime.random(-200, 200),
        translateY: () => anime.random(-200, 200),
        scale: () => anime.random(1, 2),
        opacity: [0.2, 0.4],
        duration: () => anime.random(3000, 5000),
        delay: () => anime.random(0, 1000),
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad'
      });
    });

    return () => {
      particles.forEach(particle => particle.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden opacity-50"
      style={{ background: 'url(/noise.png) repeat' }}
    />
  );
}