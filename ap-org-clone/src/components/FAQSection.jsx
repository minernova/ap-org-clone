import React from "react";
import SectionHeading from "./SectionHeading";
import SocialButtons from "./SocialButtons";
import FAQAccordian from "./FAQAccordian";

export default function FAQSection() {
  return (
    <div className="py-10 bg-gray-50">
      <div class="flex flex-col px-28  lg:items-start justify-between items-center lg:flex-row  ">
        <div className=" flex-col flex   w-1/3">
          <span className="text-xl text-center lg:text-start font-semibold">
            FAQs
          </span>
          <span className="text-center lg:text-start">
            Can’t find the answer you’re looking for? Reach out to our support
            team.
          </span>
        </div>
        <FAQAccordian />
      </div>
    </div>
  );
}
