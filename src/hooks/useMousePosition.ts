import { useState, useEffect } from 'react';
import { MousePosition } from '@/types/animations';

export const useMousePosition = (delay: number = 0): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateMousePosition = (e: MouseEvent) => {
      if (delay > 0) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
        }, delay);
      } else {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay]);

  return mousePosition;
};
