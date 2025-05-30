import { useEffect, useState, useCallback, useContext } from "react";

import "swiper/css/free-mode";
import { useScroll } from "framer-motion";
import { slides } from "./data";
import { useTranslation } from "react-i18next";
import { Link, Routes, Route, ScrollRestoration } from "react-router-dom";

import "swiper/css";
import "./App.css";

import { Developer, circleDrk, circleLgt, animationData, CV } from "./assets";

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
  CookieBanner,
  PrivacyPolicy,
} from "./components";

import { MenuContext } from "./components/AppProvider/MenuProvider";
import { ThemeContext } from "./components/AppProvider/ThemeProvider";
import { IsAnimation } from "./components/AppProvider/AnimationChecker";

function App() {
  const [currentTime, setCurrentTime] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showBanner, setShowBanner] = useState(false);
  const [text, setText] = useState(
    "DREAMER.  RESEARCHER.  REALIZER. PARTNER. TEAM PLAYER."
  );
  const [progress, setProgress] = useState(0);
  const [isWhatsAppVisible, setIsWhatsAppVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const { t } = useTranslation();

  const { showMenu } = useContext(MenuContext);
  const { isDarkMode } = useContext(ThemeContext);
  const { setIsAnimation } = useContext(IsAnimation);

  useEffect(() => {
    setTimeout(() => {
      setShowBanner(true);
    }, 5000);
  }, []);

  const handleScrollChange = useCallback((latest) => {
    setProgress(latest);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", handleScrollChange);
    return () => unsubscribe();
  }, [scrollYProgress, handleScrollChange]);

  useEffect(() => {
    const updateTime = () => {
      const yerevanTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Yerevan",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      }).format(new Date());
      setCurrentTime(yerevanTime);
    };

    updateTime();

    const intervalId = setInterval(updateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty(
        "--after-border-color-light",
        "white"
      );
    } else {
      document.documentElement.style.setProperty(
        "--after-border-color-light",
        "#bfbebe"
      );
    }
  }, [isDarkMode]);

  return (
    <>
      <ScrollRestoration />
      {isLoading && (
        <LoadingAnimation isLoading={isLoading} setIsLoading={setIsLoading} />
      )}
      {!isLoading && (
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/"
            element={
              <div className="container">
                <ProgressBar progress={progress} />
                <ModeSwitchWrapper />

                <div className="angry-grid">
                  <HeroWrapper CV={CV} />
                  <HeroImage Developer={Developer} />
                  <RotatingCircle circleLgt={circleLgt} circleDrk={circleDrk} />
                  <HeroBorn />
                  <Languages />
                  <Location
                    currentTime={currentTime}
                    animationData={animationData}
                  />
                  <DevelopmentJourney />
                  <InteractiveBlock text={text} setText={setText} />
                </div>

                <CareerTimeline slides={slides} />
                <AnimatedTitle title={t("AnimatedTitle.title1")} />
                <Projects />
                <AnimatedTitle title={t("AnimatedTitle.title2")} />
                <WorkingWithMe setIsWhatsAppVisible={setIsWhatsAppVisible} />
                <WorkingImage />
                {isWhatsAppVisible && <WhatsAppChat />}
                <AnimatedTitle title={t("AnimatedTitle.title3")} />
                <Reviews />
                {showMenu && <Menu />}
                <Footer setIsWhatsAppVisible={setIsWhatsAppVisible} />
                <pre
                  style={{
                    textAlign: "center",
                    marginTop: "0",
                    fontSize: "12px",
                    fontWeight: "300",
                  }}
                >
                  <Link
                    to="/privacy-policy"
                    onClick={() => setIsAnimation(false)}
                  >
                    Privacy Policy
                  </Link>
                </pre>
                {showBanner && <CookieBanner />}
              </div>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
