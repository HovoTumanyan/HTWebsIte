import { useEffect, useState, useCallback } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useScroll } from 'framer-motion';
import { slides, frontendSkills, backendSkills } from './data';
import { useTranslation } from 'react-i18next';

import './App.css';

import { Developer, circleDrk, circleLgt, animationData, CV } from './assets';

import {
  LoadingAnimation,
  ProgressBar,
  ModeSwitchWrapper,
  HeroBorn,
  RotatingCircle,
  HeroImage,
  Languages,
  Location,
  HeroWrapper,
  DevelopmentJourney,
  InteractiveBlock,
  CareerTimeline,
  Projects,
  AnimatedTitle,
  WorkingWithMe,
  WhatsAppChat,
  Reviews,
  WorkingImage,
  Footer,
  Menu,
} from './components';

function App() {
  const [currentTime, setCurrentTime] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isFrontendOpen, setIsFrontendOpen] = useState(false);
  const [isBackendOpen, setIsBackendOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState('DREAMER.  RESEARCHER.  REALIZER. PARTNER. TEAM PLAYER.');
  const [progress, setProgress] = useState(0);
  const [isWhatsAppVisible, setIsWhatsAppVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const { scrollYProgress } = useScroll();
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const { t } = useTranslation();


  const handleScrollChange = useCallback((latest) => {
    setProgress(latest);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', handleScrollChange);
    return () => unsubscribe();
  }, [scrollYProgress, handleScrollChange]);

  useEffect(() => {
    const updateTime = () => {
      const yerevanTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Yerevan',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      }).format(new Date());

      setCurrentTime(yerevanTime);
    };

    updateTime();

    const intervalId = setInterval(updateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const textAnimation = {
    hidden: {
      y: isMobile ? 25 : 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: isMobile ? 0.4 : 0.7,
        ease: 'easeOut',
      },
    },
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty('--after-border-color-light', '#ffff');
    } else {
      document.documentElement.style.setProperty('--after-border-color-light', '#e8e8e8');
    }
  }, [isDarkMode]);

  return (
    <div className="container">
      {isLoading ? (
        <LoadingAnimation isLoading={isLoading} setIsLoading={setIsLoading} />
      ) : (
        <>
          <ProgressBar isDarkMode={isDarkMode} progress={progress} />
          <ModeSwitchWrapper isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

          <div className="angry-grid">
            <HeroWrapper isDarkMode={isDarkMode} textAnimation={textAnimation} CV={CV} />
            <HeroImage
              isDarkMode={isDarkMode}
              textAnimation={textAnimation}
              Developer={Developer}
            />
            <RotatingCircle
              isDarkMode={isDarkMode}
              circleLgt={circleLgt}
              circleDrk={circleDrk}
              textAnimation={textAnimation}
            />
            <HeroBorn isDarkMode={isDarkMode} textAnimation={textAnimation} />
            <Languages
              frontendSkills={frontendSkills}
              backendSkills={backendSkills}
              isFrontendOpen={isFrontendOpen}
              isBackendOpen={isBackendOpen}
              setIsFrontendOpen={setIsFrontendOpen}
              setIsBackendOpen={setIsBackendOpen}
              textAnimation={textAnimation}
              isDarkMode={isDarkMode}
            />
            <Location
              currentTime={currentTime}
              animationData={animationData}
              textAnimation={textAnimation}
              isDarkMode={isDarkMode}
            />

            <DevelopmentJourney
              isDarkMode={isDarkMode}
              textAnimation={textAnimation}
              setShowMenu={setShowMenu}
            />

            <InteractiveBlock
              textAnimation={textAnimation}
              text={text}
              setText={setText}
              isDarkMode={isDarkMode}
            />
          </div>

          <CareerTimeline slides={slides} isDarkMode={isDarkMode} />
          <AnimatedTitle title={t('AnimatedTitle.title1')} isDarkMode={isDarkMode} textAnimation={textAnimation} />
          <Projects isDarkMode={isDarkMode} textAnimation={textAnimation} />
          <AnimatedTitle
            title={t('AnimatedTitle.title2')}
            isDarkMode={isDarkMode}
            textAnimation={textAnimation}
          />
          <WorkingWithMe
            setIsWhatsAppVisible={setIsWhatsAppVisible}
            isDarkMode={isDarkMode}
            textAnimation={textAnimation}
          />
          <WorkingImage />
          {isWhatsAppVisible && <WhatsAppChat />}
          <AnimatedTitle title={t('AnimatedTitle.title3')} isDarkMode={isDarkMode} textAnimation={textAnimation} />
          <Reviews isDarkMode={isDarkMode} textAnimation={textAnimation} />
          {showMenu && <Menu />}
          <Footer setShowMenu={setShowMenu} setIsWhatsAppVisible={setIsWhatsAppVisible} />
        </>
      )}
    </div>
  );
}

export default App;
