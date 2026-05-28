import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;
    const animRing = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      animationFrameId = requestAnimationFrame(animRing);
    };
    animRing();

    // Event delegation for hover states
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .bento-card, .project-card, .gh-card, .stat-card, .contact-link-item');
      if (target) {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.background = 'var(--accent2)';
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, .bento-card, .project-card, .gh-card, .stat-card, .contact-link-item');
      if (target) {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        cursor.style.background = 'var(--accent)';
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>
    </>
  );
}
