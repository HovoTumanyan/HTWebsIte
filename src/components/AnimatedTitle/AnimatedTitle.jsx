import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../AppProvider/ThemeProvider";
import { AnimationContext } from "../AppProvider/MainAnimationProvider";
import "./AnimatedTitle.css";

export default function AnimatedTitle({ title }) {
  const { isDarkMode } = useContext(ThemeContext);
  const { mainAnimation } = useContext(AnimationContext);

  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      variants={mainAnimation}
      viewport={{ once: true }}
      className={`animated-title ${isDarkMode ? "darkMode" : "lightMode"}`}
    >
      {title}
    </motion.h1>
  );
}
