import React from "react";

const LanguageOption = ({ id, language, label, handleLanguageChange }) => {
  return (
    <div
      className={`w-full cursor-pointer px-5 py-2 text-base font-medium hover:bg-slate-100 `}
      id={id}
      onClick={() => handleLanguageChange(language)}
    >
      <div>{label}</div>
    </div>
  );
};

export default LanguageOption;
