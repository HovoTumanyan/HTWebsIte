import BackGroundSwitch from '../ant-design/BackGroundSwitch';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

export default function ModeSwitchWrapper() {
  return (
    <div className="mode-switch-wrapper sticky-nav" style={{gap:'10px'}}>
      <LanguageSelector />
      <BackGroundSwitch />
    </div>
  );
}
