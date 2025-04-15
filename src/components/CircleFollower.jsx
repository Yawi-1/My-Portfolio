import React, { useEffect, useRef } from 'react';

const MagicCursor = () => {
  const mainRef = useRef(null);
  const trailCount = 6; // Optimal number for smooth trail
  const trailRefs = useRef(Array(trailCount).fill().map(() => React.createRef()));
  const pos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const isClickable = useRef(false);
  const rafId = useRef(null);

  const lerp = (a, b, n) => (1 - n) * a + n * b;

  const handleMouseMove = (e) => {
    targetPos.current = { x: e.clientX, y: e.clientY };
    
    const target = e.target;
    const clickableTags = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'LABEL'];
    isClickable.current = clickableTags.includes(target.tagName) || 
                         target.getAttribute('role') === 'button' || 
                         target.onclick;
  };

  const animate = () => {
    // Smooth main cursor movement
    pos.current.x = lerp(pos.current.x, targetPos.current.x, 0.3);
    pos.current.y = lerp(pos.current.y, targetPos.current.y, 0.3);

    // Update main cursor
    if (mainRef.current) {
      mainRef.current.style.transform = `translate3d(${pos.current.x - 12}px, ${pos.current.y - 12}px, 0)`;
    }

    // Update trail elements with staggered interpolation
    trailRefs.current.forEach((ref, i) => {
      if (!ref.current) return;
      
      const ratio = (i + 1) / trailCount;
      const x = lerp(pos.current.x, targetPos.current.x, ratio * 0.6);
      const y = lerp(pos.current.y, targetPos.current.y, ratio * 0.6);
      
      ref.current.style.transform = `translate3d(${x - 2}px, ${y - 2}px, 0)`;
      ref.current.style.opacity = 1 - (i * 0.15);
    });

    rafId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    rafId.current = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  const trailColor = isClickable.current ? '#60a5fa' : '#9333ea';

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[9999] pointer-events-none">
      {/* Main Cursor */}
      <div
        ref={mainRef}
        className="absolute rounded-full will-change-transform"
        style={{
          width: '24px',
          height: '24px',
          background: `radial-gradient(circle at 65% 35%, ${trailColor}cc, ${trailColor}40)`,
          boxShadow: `0 0 20px ${trailColor}80`,
          transition: 'transform 0.15s linear, background 0.2s ease'
        }}
      />
      
      {/* Smooth Trail */}
      {Array(trailCount).fill().map((_, i) => (
        <div
          key={i}
          ref={trailRefs.current[i]}
          className="absolute rounded-full will-change-transform"
          style={{
            width: '4px',
            height: '4px',
            background: trailColor,
            boxShadow: `0 0 6px ${trailColor}`,
            opacity: 1 - (i * 0.15),
            transition: 'opacity 0.2s ease'
          }}
        />
      ))}
    </div>
  );
};

export default MagicCursor;