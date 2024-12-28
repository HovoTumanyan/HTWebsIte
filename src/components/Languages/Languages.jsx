import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ThemeContext } from "../AppProvider/ThemeProvider";
import { AnimationContext } from "../AppProvider/MainAnimationProvider";
import { LanguagesContext } from "../AppProvider/LanguagesProvider";

export default function Languages({}) {
  const { isDarkMode } = useContext(ThemeContext);
  const { mainAnimation } = useContext(AnimationContext);
  const {
    frontendSkills,
    backendSkills,
    isFrontendOpen,
    isBackendOpen,
    setIsFrontendOpen,
    setIsBackendOpen,
  } = useContext(LanguagesContext);

  const { t } = useTranslation();
  const languages = t("Languages.humanend");

  const listAnimation = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
    exit: {
      opacity: 1,
      height: 0,
      transition: { duration: 0.9, staggerChildren: 0.2, staggerDirection: -1 },
    },
  };

  const listItemAnimation = {
    hidden: { opacity: 0, x: -40, y: 20 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -40, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      variants={mainAnimation}
      className={`languages ${isDarkMode ? "darkMode" : "lightMode"}`}
      id="languages-i-speak-section"
    >
      <div className="about-languages">
        <motion.h1>{t("Languages.title")}</motion.h1>
      </div>

      <motion.div className="frontendLng">
        <div className="frontend">
          <motion.h2
            onClick={() => setIsFrontendOpen(!isFrontendOpen)}
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            Frontend
            <motion.span
              animate={{ rotate: isFrontendOpen ? 180 : 0 }}
              transition={{ duration: 0.6, ease: "linear" }}
              style={{ marginLeft: "8px", display: "inline-block" }}
            >
              ▼
            </motion.span>
          </motion.h2>

          <AnimatePresence>
            {isFrontendOpen && (
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={listAnimation}
                style={{ overflow: "hidden" }}
              >
                {frontendSkills.map((skill, index) => (
                  <motion.li key={index} variants={listItemAnimation}>
                    {skill.name} {skill.icon}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <div className="humanlng">
          <motion.h2 style={{ textAlign: "center", marginBottom: "16px" }}>
            Humanend :)
          </motion.h2>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            variants={listAnimation}
            viewport={{ amount: 0.2, once: true }}
          >
            {languages.map((language, index) => (
              <motion.li key={index} variants={listItemAnimation}>
                {language}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="backend">
          <motion.h2
            onClick={() => setIsBackendOpen(!isBackendOpen)}
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            Backend
            <motion.span
              animate={{ rotate: isBackendOpen ? 180 : 0 }}
              transition={{ duration: 0.6, ease: "linear" }}
              style={{ marginLeft: "8px", display: "inline-block" }}
            >
              ▼
            </motion.span>
          </motion.h2>

          <AnimatePresence>
            {isBackendOpen && (
              <motion.ul
                initial="hidden"
                layout
                animate="visible"
                exit="exit"
                variants={listAnimation}
                style={{ overflow: "hidden" }}
              >
                {backendSkills.map((skill, index) => (
                  <motion.li
                    key={index}
                    variants={listItemAnimation}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                      }}
                      style={{ marginRight: "8px" }}
                      className="skill-progress"
                    >
                      {skill.icon}
                    </motion.div>
                    {skill.name}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
