import { createContext, useContext } from "react";
import { IsAnimation } from "./AnimationChecker";

const AnimationContext = createContext();

const MainAnimationProvider = ({ children }) => {
  const { isAnimation } = useContext(IsAnimation);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const mainAnimation = {
    hidden: {
      y: isMobile ? 25 : 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: isMobile ? 0.4 : 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimationContext.Provider value={{ mainAnimation:isAnimation ? mainAnimation : null }}>
      {children}
    </AnimationContext.Provider>
  );
};
export default MainAnimationProvider;
export { AnimationContext };
