import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

interface Trail {
  id: number;
  x: number;
  y: number;
}

export const CursorTrail = () => {
  const mousePosition = useMousePosition();
  const [trails, setTrails] = useState<Trail[]>([]);

  useEffect(() => {
    if (mousePosition.x === 0 && mousePosition.y === 0) return;

    const newTrail: Trail = {
      id: Date.now(),
      x: mousePosition.x,
      y: mousePosition.y
    };

    setTrails((prev) => [...prev, newTrail].slice(-10));

    const timeout = setTimeout(() => {
      setTrails((prev) => prev.filter((t) => t.id !== newTrail.id));
    }, 500);

    return () => clearTimeout(timeout);
  }, [mousePosition]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <AnimatePresence>
        {trails.map((trail, index) => (
          <motion.div
            key={trail.id}
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              left: trail.x - 4,
              top: trail.y - 4,
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(139, 92, 246, ${0.6 - index * 0.05}), transparent)`,
              pointerEvents: 'none'
            }}
          />
        ))}
      </AnimatePresence>
      
      <motion.div
        className="fixed w-4 h-4 rounded-full border-2 border-primary pointer-events-none"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28
        }}
      />
    </div>
  );
};
