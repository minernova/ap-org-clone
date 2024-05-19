import React from "react";
import SectionHeading from "./SectionHeading";
import SocialButtons from "./SocialButtons";
import FAQAccordian from "./FAQAccordian";
import AccordianSection from "./AccordianSection";
import { useTranslation } from "react-i18next";

export default function FAQSection() {
  const { t } = useTranslation();
  return (
    <div className="py-10 bg-gray-50">
      <div class="flex flex-col lg:px-28 px-8 lg:items-start justify-between items-center lg:flex-row  ">
        <div className=" flex-col justify-start items-start w-full  flex mb-10 lg:mb-0  lg:w-1/3">
          <span className="text-xl md:text-center lg:text-start text-start font-semibold">
            {t("faqs")}
          </span>
          <span className="text-start mt-2 tracking-wide md:text-center lg:text-start">
            {t("cant_find_answer")}{" "}
            <a href="" className="text-orange">
              {t("support")}{" "}
            </a>
            {t("team")}{" "}

          </span>
        </div>
        <FAQAccordian />
      </div>
    </div>
  );
}
