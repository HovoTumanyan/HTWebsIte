import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function RotatingCircle({ isDarkMode, circleLgt, circleDrk, textAnimation }) {
  const { t } = useTranslation();
  const rotatingCircle = {
    hidden: {
      rotate: 0,
    },
    visible: {
      rotate: 360,
      transition: {
        duration: 15,
        ease: 'linear',
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      variants={textAnimation}
      className={`rotating-circle ${isDarkMode ? 'darkMode' : 'lightMode'}`}
    >
      <motion.div className="circle">
        <motion.img
          src={isDarkMode ? circleLgt : circleDrk}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={rotatingCircle}
        />
      </motion.div>

      <div className="circle-info">
        <p>
          {t('Circle.circleInfo')}
        </p>
      </div>
    </motion.div>
  );
}
