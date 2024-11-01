import { motion } from 'framer-motion';

export default function HeroImage({ Developer, textAnimation, isDarkMode }) {
  return (
    <div className="hero-img">
      <motion.div className="hero-svg ">
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1,transition: { duration: 0.9} }}
          viewport={{ once: true }}
          src={Developer}
          alt=""
        />
      </motion.div>
    </div>
  );
}
