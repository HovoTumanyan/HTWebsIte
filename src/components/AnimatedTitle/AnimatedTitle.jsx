import { motion } from 'framer-motion';
import './AnimatedTitle.css'

export default function AnimatedTitle({ title, isDarkMode, textAnimation }) {
  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      variants={textAnimation}
      viewport={{ once: true }}
      className={`animated-title ${isDarkMode ? 'darkMode' : 'lightMode'}`}
    >
      {title}
    </motion.h1>
  );
}
