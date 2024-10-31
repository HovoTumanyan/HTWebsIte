import { useEffect } from 'react';
import { motion } from 'framer-motion';
import './LoadingAnimation.css';

export default function LoadingAnimation({ setIsLoading }) {
  const letters = '{HT: () => Website}'.split('');

  const letterAnimation = {
    hidden: { opacity: 0, x: -70 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeInOut',
      },
    }),
  };

  const underline = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: {
        duration: letters.length * 0.1 + 0.7,
        ease: 'easeInOut',
      },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, letters.length * 130);

    return () => clearTimeout(timer);
  }, [letters, setIsLoading]);

  return (
    <div className="loading-container">
      <div className="letters-container">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={letterAnimation}
            className="letter"
          >
            {letter}
          </motion.span>
        ))}
        <motion.div className="underline" initial="hidden" animate="visible" variants={underline} />
      </div>
    </div>
  );
}
