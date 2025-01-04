import { createContext, useState } from "react";
import { frontendSkills, backendSkills } from "../../data";

const LanguagesContext = createContext();

const LanguagesProvider = ({ children }) => {
  const [isFrontendOpen, setIsFrontendOpen] = useState(false);
  const [isBackendOpen, setIsBackendOpen] = useState(false);

  const state = {
    isFrontendOpen,
    setIsFrontendOpen,
    isBackendOpen,
    setIsBackendOpen,
    frontendSkills,
    backendSkills,
  };

  return (
    <LanguagesContext.Provider value={state}>
      {children}
    </LanguagesContext.Provider>
  );
};
export default LanguagesProvider;
export { LanguagesContext };
