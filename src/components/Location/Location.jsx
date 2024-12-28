import Lottie from "react-lottie";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../AppProvider/ThemeProvider";
import { AnimationContext } from "../AppProvider/MainAnimationProvider";

export default function Location({ currentTime, animationData }) {
  const { isDarkMode } = useContext(ThemeContext);
  const { mainAnimation } = useContext(AnimationContext);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={mainAnimation}
      className={`location ${isDarkMode ? "darkMode" : "lightMode"}`}
    >
      <div className="coordinates">
        <pre>49.1579° N</pre>
        <pre>121.9515° W</pre>
      </div>
      <div className="timezone">
        <pre>{currentTime} AMT</pre>{" "}
      </div>
      <div className="globe">
        <Lottie
          options={{
            animationData: animationData,
            loop: true,
            autoplay: true,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          title="Armenia"
          speed={0.7}
          height={125}
          width={200}
        />
      </div>
    </motion.div>
  );
}
