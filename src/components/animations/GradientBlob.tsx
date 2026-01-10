import { motion } from 'framer-motion';

interface GradientBlobProps {
  className?: string;
  delay?: number;
}

export const GradientBlob = ({ className = '', delay = 0 }: GradientBlobProps) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: [0.8, 1.2, 0.8],
        opacity: [0.3, 0.5, 0.3],
        x: [0, 50, 0],
        y: [0, 30, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
};
