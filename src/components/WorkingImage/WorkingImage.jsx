import { Developer } from "../../assets";
import { motion } from "framer-motion";
import "./WorkingImage.css";

export default function WorkingImage() {
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
        variants={imagesAnimation}
        viewport={{ once: true }}
        className="discous-blok"
      >
        <img src={Developer} alt="Discous" />
      </motion.div>
    </div>
  );
}
