import { motion } from "framer-motion";
import { IsAnimation } from "../AppProvider/AnimationChecker";
import { useContext } from "react";

export default function HeroImage({ Developer }) {
  const { isAnimation } = useContext(IsAnimation);
  const imageAnimation = {
    hidden: {
      scale: 0.9,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.9,
      },
    },
  };
  return (
    <div className="hero-img">
      <motion.div className="hero-svg ">
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={isAnimation ? imageAnimation : null}
          src={Developer}
          alt=""
        />
      </motion.div>
    </div>
  );
}
