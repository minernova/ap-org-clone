import React, { useState } from 'react';
import DropdownToggle from './DropdownToggle';
import LanguageDropdown from './LanguageDropdown';
import { toggleLanguage,currentLanguage} from '../../../../utils/i18n';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage());

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const handleLanguageChange = (language) => {
    toggleLanguage(language);
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div id="main-website-navbar-language-selector" className="ml-3 inline-flex cursor-pointer items-center px-2 tab:px-0">
      <div className="relative">
        <DropdownToggle isOpen={isOpen} toggleDropdown={toggleDropdown} selectedLanguage={selectedLanguage} />
        {isOpen && <LanguageDropdown handleLanguageChange={handleLanguageChange} />}
      </div>
    </div>
  );
};

export default LanguageSelector;
