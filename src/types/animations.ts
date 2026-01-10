export interface MousePosition {
  x: number;
  y: number;
}

export interface ParticleConfig {
  count: number;
  speed: number;
  size: { min: number; max: number };
  color: string;
  opacity: number;
}

export interface TiltConfig {
  max: number;
  scale: number;
  speed: number;
}

export interface MagneticConfig {
  strength: number;
  radius: number;
}

export interface RevealConfig {
  direction: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
  }
};

export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const slideUp = {
  hidden: { y: 100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
  }
};

export const scaleIn = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const rotateIn = {
  hidden: { rotate: -180, opacity: 0 },
  visible: { 
    rotate: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
  }
};

export const flipCard = {
  hidden: { rotateY: 90, opacity: 0 },
  visible: { 
    rotateY: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
