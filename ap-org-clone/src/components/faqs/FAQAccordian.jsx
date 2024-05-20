import React from "react";

import SingleAccordian from "./SingleAccordian";
import { useLoaderData } from "react-router-dom";

export default function FAQAccordian() {
  const {faqs}=useLoaderData();
  // console.log(faqs);
  return (
    <>
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="w-full  lg:ms-32"
      >
        {faqs.map((faq,idx)=> {
          // console.log(faq);
          return <React.Fragment key={idx}> 
          <SingleAccordian question={faq.question} answer={faq.answer}/>
          <hr className="mb-3" />
        </React.Fragment>
        }
        )}
      </div>
    </>
  );
}
