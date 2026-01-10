import { motion } from 'framer-motion';

interface GradientBlobProps {
  className?: string;
  color?: string;
  size?: number;
  top?: string;
  left?: string;
  delay?: number;
}

export const GradientBlob = ({ 
  className = '',
  color = 'rgba(139, 92, 246, 0.2)',
  size = 300,
  top = '50%',
  left = '50%',
  delay = 0
}: GradientBlobProps) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{
        background: color,
        width: size,
        height: size,
        top,
        left,
        transform: 'translate(-50%, -50%)'
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        x: [-20, 20, -20],
        y: [-20, 20, -20]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
    />
  );
};
