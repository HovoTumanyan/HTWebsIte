import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';

export default function HeroBorn({ isDarkMode, textAnimation }) {
  const { t } = useTranslation();
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textAnimation}
        className={`hero-born ${isDarkMode ? 'darkMode' : 'lightMode'}`}
      >
        <div className="hero-age">
          <motion.h1 variants={textAnimation}>EST. - 1991</motion.h1>
          {t('HeroBorn.born')}
          <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
            {t('HeroBorn.country')} <ReactCountryFlag countryCode="AM" style={{ padding: '5px' }} />{' '}
          </span>
          <br />
          {t('HeroBorn.liveIn')}
          <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
            {t('HeroBorn.city')} <ReactCountryFlag countryCode="AM" style={{ padding: '5px' }} />{' '}
          </span>
          <br />
        </div>
      </motion.div>
    );
  }
  