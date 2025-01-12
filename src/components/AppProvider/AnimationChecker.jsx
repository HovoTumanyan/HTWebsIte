import { createContext, useState } from "react";

const IsAnimation = createContext();

const AnimationChecker = ({ children }) => {
  const [isAnimation, setIsAnimation] = useState(true);

  return (
    <IsAnimation.Provider value={{ isAnimation, setIsAnimation }}>
      {children}
    </IsAnimation.Provider>
  );
};

export default AnimationChecker;
export { IsAnimation };
