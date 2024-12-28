import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { useContext } from "react";
import { MenuContext } from "../AppProvider/MenuProvider";
import { ThemeContext } from "../AppProvider/ThemeProvider";
import { AnimationContext } from "../AppProvider/MainAnimationProvider";

export default function DevelopmentJourney() {
  const { setShowMenu } = useContext(MenuContext);
  const { isDarkMode } = useContext(ThemeContext);
  const { mainAnimation } = useContext(AnimationContext);

  const { t } = useTranslation();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={mainAnimation}
      viewport={{ once: true }}
      onViewportEnter={() => setShowMenu(true)}
      className={`development-journey ${isDarkMode ? "darkMode" : "lightMode"}`}
      id="fullstack-section"
    >
      <h3>{t("DevelopmentJourney.title")}</h3>
      <p>
        <Trans i18nKey="DevelopmentJourney.description1" />
      </p>
      <p>{t("DevelopmentJourney.description2")}</p>
    </motion.div>
  );
}
