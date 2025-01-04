import { useState, useRef, useCallback, useContext } from "react";
import ReactCountryFlag from "react-country-flag";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import useOutsideClick from "../../customHooks/useOutsideClick";
import { ThemeContext } from "../AppProvider/ThemeProvider";
import "./LanguageSelector.css";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);
  const { i18n } = useTranslation();
  const country = i18n.language === "ru";

  const toggleLanguage = () => {
    const newLang = country ? "en" : "ru";
    i18n.changeLanguage(newLang);
    setIsOpen(false);
  };

  const selectorRef = useRef(null);

  const handleCloseMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useOutsideClick(selectorRef, handleCloseMenu, isOpen);

  return (
    <div
      className="language-selector"
      ref={selectorRef}
      style={{ backgroundColor: isDarkMode ? "#242424" : "#e8e8e8" }}
    >
      <div
        className="language-selector__trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ReactCountryFlag
          countryCode={country ? "RU" : "GB"}
          className="language-selector__flag"
          svg
        />

        <FaChevronDown
          className={`language-selector__icon ${isOpen ? "open" : ""}`}
        />
      </div>

      {isOpen && (
        <div
          className="language-selector__dropdown"
          style={{ backgroundColor: isDarkMode ? "#242424" : "#e8e8e8" }}
          onClick={toggleLanguage}
        >
          <ReactCountryFlag
            countryCode={country ? "GB" : "RU"}
            className="language-selector__flag"
            svg
          />
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
