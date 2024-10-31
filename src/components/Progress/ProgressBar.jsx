import { motion } from 'framer-motion';

export default function ProgressBar({ progress, isDarkMode }) {
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
