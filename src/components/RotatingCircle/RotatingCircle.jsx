import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ThemeContext } from "../AppProvider/ThemeProvider";
import { AnimationContext } from "../AppProvider/MainAnimationProvider";

export default function RotatingCircle({ circleLgt, circleDrk }) {
  const { isDarkMode } = useContext(ThemeContext);
  const { mainAnimation } = useContext(AnimationContext);

  const { t } = useTranslation();
  const rotatingCircle = {
    hidden: {
      rotate: 0,
    },
    visible: {
      rotate: 360,
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      variants={mainAnimation}
      className={`rotating-circle ${isDarkMode ? "darkMode" : "lightMode"}`}
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
        <p>{t("Circle.circleInfo")}</p>
      </div>
    </motion.div>
  );
}
