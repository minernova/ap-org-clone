import React from "react";
import SocialButtons from "./SocialButtons";
import SectionHeading from "./SectionHeading";
import { useLoaderData } from "react-router-dom";

export default function HeroCard() {
  const {seriesData}=useLoaderData();
  const {details: series} = seriesData;
  
  console.log(series);
  return (
    <div className="mt-8">
      <SectionHeading label={series.title}/>

      <div class="flex flex-col md:items-start items-center md:flex-row  ">
        <img
          class="object-cover w-full min-h-full lg:w-2/5 md:w-3/5 flex-shrink-0 rounded  "
          src={`https://cimg.acharyaprashant.org/images/${series.thumbnail.id}/10/image.jpg`}
          alt=""
        ></img>
        <div class="flex flex-col justify-start self-stretch   px-4 ">
          <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-700">
            {series.subtitle}
          </h5>
          <p class="mb-3 font-light text-sm text-gray-700 tracking-wide">
            {series.description}
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <h2 class="flex flex-col justify-start  mt-4">Share this series:</h2>
        <SocialButtons />
      </div>
    </div>
  );
}
