import { useTranslation } from "react-i18next";
import "./languageSwitcher.css";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="lang-switcher-container">
      <button className="lang-btn" onClick={toggleLanguage}>
        <div className="lang-labels">
          <span className={`lang-text ${i18n.language === 'pt' ? 'active' : ''}`}>PT</span>
          <div className="lang-divider"></div>
          <span className={`lang-text ${i18n.language === 'en' ? 'active' : ''}`}>EN</span>
        </div>
        
        <div className="lang-switch-visual">
          <div className={`lang-ball ${i18n.language === 'en' ? 'en' : ''}`}></div>
        </div>
      </button>
    </div>
  );
}