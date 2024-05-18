import React from "react";

import SingleAccordian from "./SingleAccordian";

const a=[1,2,3,4]
export default function FAQAccordian() {
  return (
    <>
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="w-full  lg:ms-32"
      >
        {a.map(i=> {

          return <>
            <SingleAccordian key={i}/>
              <hr className="mb-3"/>
          </>
        }
        )}
      </div>
    </>
  );
}
