import ReactCountryFlag from 'react-country-flag';
import { FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useState, useRef,useCallback } from 'react';
import useOutsideClick from '../../customHooks/useOutsideClick';
import './LanguageSelector.css';

const LanguageSelector = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const country = i18n.language === 'ru';

  const toggleLanguage = () => {
    const newLang = country ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
    setIsOpen(false);
  };
  
  const selectorRef = useRef(null);
  
  const handleCloseMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useOutsideClick(selectorRef, handleCloseMenu, isOpen);

  return (
    <div className="language-selector" ref={selectorRef}>
      <div className="language-selector__trigger" onClick={() => setIsOpen(!isOpen)}>
        <ReactCountryFlag countryCode={country ? 'RU' : 'GB'} className="language-selector__flag" />
        <FaChevronDown className={`language-selector__icon ${isOpen ? 'open' : ''}`} />
      </div>

      {isOpen && (
        <div className="language-selector__dropdown" onClick={toggleLanguage}>
          <ReactCountryFlag
            countryCode={country ? 'GB' : 'RU'}
            className="language-selector__flag"
          />
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
