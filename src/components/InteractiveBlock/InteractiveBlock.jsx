import { motion } from "framer-motion";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AnimationContext } from "../AppProvider/MainAnimationProvider";

export default function InteractiveBlok({ text, setText }) {
  const { mainAnimation } = useContext(AnimationContext);
  const { t } = useTranslation();

  const handleMouseEnter = () => {
    setText("ENCOURAGER. FATHER. HUSBAND. BROTHER. FRIEND.");
  };

  const handleMouseLeave = () => {
    setText("DREAMER.  RESEARCHER.  REALIZER. PARTNER. TEAM PLAYER.");
  };

  return (
    <motion.div
      className="interactive-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial="hidden"
      whileInView="visible"
      variants={mainAnimation}
      viewport={{ once: true }}
    >
      <motion.h3
        className="dynamic-text"
        key={text}
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.6 }}
      >
        {text}
      </motion.h3>
    </motion.div>
  );
}
