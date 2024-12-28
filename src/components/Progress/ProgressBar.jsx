import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../AppProvider/ThemeProvider';

export default function ProgressBar({ progress }) {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <motion.div
      className="progress-bar"
      style={{
        scaleX: progress,
        backgroundColor: isDarkMode ? 'white' : '#242424',
      }}
    />
  );
}
