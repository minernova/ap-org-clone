import React from "react";
import LanguageOption from "./LanguageOption";

const LanguageDropdown = ({ handleLanguageChange }) => {
  return (
    <div className="absolute left-1/2 mt-2 z-20 -translate-x-1/2 transform whitespace-nowrap rounded-lg shadow-lg">
      <div className="z-menu flex flex-col items-start rounded-md bg-white py-1.5">
        <LanguageOption
          id="main-website-hindi-language-toggle"
          language="hi"
          label="हिन्दी"
          handleLanguageChange={handleLanguageChange}
        />
        <LanguageOption
          id="main-website-english-language-toggle"
          language="en"
          label="English"
          handleLanguageChange={handleLanguageChange}
        />
      </div>
    </div>
  );
};

export default LanguageDropdown;
