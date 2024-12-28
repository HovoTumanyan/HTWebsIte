import BackGroundSwitch from "../ant-design/BackGroundSwitch";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useContext } from "react";
import { ThemeContext } from "../AppProvider/ThemeProvider";

export default function ModeSwitchWrapper() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  return (
    <div className="mode-switch-wrapper sticky-nav" style={{ gap: "10px" }}>
      <LanguageSelector />
      <BackGroundSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
}
