import React from "react";
import "./css/vignette.css"

export default function HeroImage({ id }) {
  return (
    <div className="w-full md:w-5/12 flex-shrink-0 relative inline-block ">
        <div className="vignette w-full">

        <img
            class="object-cover w-full   rounded  "
            src={`https://cimg.acharyaprashant.org/images/${id}/10/image.jpg`}
            alt=""
        ></img>
        </div>
      <img src="https://acharyaprashant.org/images/ic_apsignature_hindi.png" className="absolute bottom-3 right-3 w-1/6 " />
    </div>
  );
}
