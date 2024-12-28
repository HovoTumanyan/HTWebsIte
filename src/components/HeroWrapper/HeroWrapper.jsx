import { motion } from 'framer-motion';
import SocialIcons from '../SocialIcons/SocialIcons';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { useContext } from 'react';
import { ThemeContext } from '../AppProvider/ThemeProvider';
import { AnimationContext } from '../AppProvider/MainAnimationProvider';

const HeroWrapper = ({  textAnimation, CV }) => {
  const {isDarkMode} = useContext(ThemeContext)
  const { mainAnimation } = useContext(AnimationContext)

  
  const { t } = useTranslation();
  const iconAnimation = {
    hidden: {
      x: 0,
      rotate: 0,
    },
    visible: (custom) => ({
      x: 6,
      rotate: -16,
      boxShadow: '5px 5px 15px white',
      transition: {
        delay: custom * 0.2,
        duration: 0.3,
        repeat: 1,
        repeatType: 'reverse',
      },
    }),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={mainAnimation}
      className={`hero-wrapper ${isDarkMode ? 'darkMode' : 'lightMode'}`}
      id='hello-section'
      viewport={{ once: true }}
    >
      <div className="hero">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={mainAnimation}
          viewport={{ amount: 0.1 }}
        >
          {t("HeroWrapper.hello")}
        </motion.h1>
        <p>
        <Trans i18nKey="HeroWrapper.aboutTheHero" />
        </p>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={mainAnimation}
          viewport={{ amount: 0.1 }}
        >
          Hovo Tumanyan
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={mainAnimation}
          viewport={{ once: false }}

        >
          {t('HeroWrapper.letsCreate')}
        </motion.p>

        <SocialIcons CV={CV} isDarkMode={isDarkMode} iconAnimation={iconAnimation} />
      </div>
    </motion.div>
  );
};

export default HeroWrapper;
