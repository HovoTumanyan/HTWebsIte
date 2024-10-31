import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function InteractiveBlok({ textAnimation, text, setText }) {
  const { t } = useTranslation();

  const handleMouseEnter = () => {
    setText('ENCOURAGER. FATHER. HUSBAND. BROTHER. FRIEND.');
  };
  
  const handleMouseLeave = () => {
    setText('DREAMER.  RESEARCHER.  REALIZER. PARTNER. TEAM PLAYER.');
  };

  return (
    <motion.div
      className="interactive-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial="hidden"
      whileInView="visible"
      variants={textAnimation}
      viewport={{ once: true }}
    >
      <motion.h3
        className="dynamic-text"
        key={text}
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.6 }}
      >
        {text}
      </motion.h3>
    </motion.div>
  );
}
