import React from "react";

const DropdownToggle = ({ isOpen, toggleDropdown, selectedLanguage }) => {
  const renderLanguageSVG = () => {
    if (selectedLanguage === "hi") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="21"
          viewBox="0 0 28 21"
          fill="#ffffff"
          >
          <path d="M9.84 5.559v4.017h4.274V5.559h2.02v9.88h-2.02v-4.234H9.84v4.234H7.827v-9.88zm10.3 0v9.88h-2.014v-9.88zM3.806 21h20.386q1.904 0 2.855-.904T28 17.408V3.592q0-1.784-.952-2.688Q26.097 0 24.193 0H3.807Q1.929 0 .964.904 0 1.809 0 3.592v13.816q0 1.784.964 2.688T3.807 21m-.461-1.5q-.897 0-1.371-.458-.475-.458-.475-1.348V3.319q0-.903.475-1.361.474-.458 1.371-.458h21.282q.896 0 1.384.458t.488 1.361v14.375q0 .89-.488 1.348t-1.384.458z"></path>
        </svg>
      );
    }
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="21"
        viewBox="0 0 28 21"
        fill="#ffffff"
        >
        <path d="M24.193 0q1.904 0 2.855.904.885.84.947 2.437l.005.25v13.817q0 1.784-.952 2.688-.884.84-2.588.9l-.267.004H3.807q-1.878 0-2.843-.904-.895-.84-.96-2.437L0 17.409V3.591Q0 1.808.964.904q.895-.84 2.58-.9L3.806 0zm.435 1.5H3.346q-.897 0-1.371.458-.423.407-.47 1.166l-.005.195v14.375q0 .89.475 1.348.421.407 1.177.452l.194.006h21.282q.896 0 1.384-.458.434-.407.482-1.156l.006-.192V3.319q0-.903-.488-1.361T24.628 1.5M11.905 5.559v1.6H7.511v2.533h4.128v1.498H7.511v2.65h4.394v1.599h-6.32v-9.88zm3.236 0 4.35 6.572h.065V5.559h1.812v9.88h-1.61L15.391 8.83h-.057v6.609h-1.812v-9.88z"></path>
      </svg>
    );
};

return (
    <div
    onClick={toggleDropdown}
    className="flex inline-flex items-center space-x-1 py-2 font-medium opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100"
    >
      {renderLanguageSVG()}
      <div
        className={`pt-0.5 transition duration-500 ${
            isOpen ? "rotate-180" : ""
        }`}
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="#ffffff"
          >
          <path d="M.208.255A.7.7 0 0 0 0 .796a.9.9 0 0 0 .238.582l3.754 4.115q.317.337.659.45.342.111.688.005.348-.107.664-.455l3.744-4.115A.8.8 0 0 0 10 .802a.72.72 0 0 0-.213-.547A.75.75 0 0 0 9.222 0H.773a.75.75 0 0 0-.565.255"></path>
        </svg>
      </div>
    </div>
  );
};

export default DropdownToggle;
