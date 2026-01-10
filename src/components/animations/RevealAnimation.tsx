import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { RevealConfig } from '@/types/animations';

interface RevealAnimationProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

export const RevealAnimation = ({ 
  children, 
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = ''
}: RevealAnimationProps) => {
  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 }
  };

  const offset = directionOffset[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration, 
        delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      {children}
    </motion.div>
  );
};
