import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
import { useContext } from 'react';
import { ThemeContext } from '../AppProvider/ThemeProvider';
import { AnimationContext } from '../AppProvider/MainAnimationProvider';


export default function HeroBorn() {
  const {isDarkMode} = useContext(ThemeContext)
  const { mainAnimation } = useContext(AnimationContext)


  const { t } = useTranslation();
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={mainAnimation}
        className={`hero-born ${isDarkMode ? 'darkMode' : 'lightMode'}`}
      >
        <div className="hero-age">
          <motion.h1 variants={mainAnimation}>EST. - 1991</motion.h1>
          {t('HeroBorn.born')}
          <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
            {t('HeroBorn.country')} <ReactCountryFlag countryCode="AM" style={{ padding: '5px' }} svg/>{' '}
          </span>
          <br />
          {t('HeroBorn.liveIn')}
          <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
            {t('HeroBorn.city')} <ReactCountryFlag countryCode="AM" style={{ padding: '5px' }}  svg/>{' '}
          </span>
          <br />
        </div>
      </motion.div>
    );
  }
  