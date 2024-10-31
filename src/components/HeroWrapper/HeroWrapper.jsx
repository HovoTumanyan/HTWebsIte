import { motion } from 'framer-motion';
import SocialIcons from '../SocialIcons/SocialIcons';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

const HeroWrapper = ({ isDarkMode, textAnimation, CV, iconAnimation }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={textAnimation}
      className={`hero-wrapper ${isDarkMode ? 'darkMode' : 'lightMode'}`}
      id='hello-section'
      viewport={{ once: true }}
    >
      <div className="hero">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={textAnimation}
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
          variants={textAnimation}
          viewport={{ amount: 0.1 }}
        >
          Hovo Tumanyan
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={textAnimation}
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
