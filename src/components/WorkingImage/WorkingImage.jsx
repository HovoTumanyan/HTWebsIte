import { Developer } from "../../assets";
import { motion } from "framer-motion";
import { IsAnimation } from "../AppProvider/AnimationChecker";
import { useContext } from "react";
import "./WorkingImage.css";

export default function WorkingImage() {
  const { isAnimation } = useContext(IsAnimation);
  const imagesAnimation = {
    hidden: {
      scale: 0.9,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div className="working-image">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={isAnimation ? imagesAnimation : null}
        viewport={{ once: true }}
        className="discous-blok"
      >
        <img src={Developer} alt="Discous" />
      </motion.div>
    </div>
  );
}
