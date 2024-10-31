import BackGroundSwitch from '../ant-design/BackGroundSwitch';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import Menu from '../Menu/Menu';

export default function ModeSwitchWrapper({ isDarkMode, setIsDarkMode }) {
  return (
    <div className="mode-switch-wrapper sticky-nav" style={{gap:'10px'}}>
      <LanguageSelector />
      <BackGroundSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
}
