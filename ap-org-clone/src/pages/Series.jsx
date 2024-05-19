import React from "react";
import HeroCard from "../components/HeroCard";
import Courses from "../components/Courses";
import FAQSection from "../components/FAQSection";
import { customFetch } from "../utils";

const FAQurl="/faqs?language=english"
const seriesURL="/series/optuser/course-series-d27351"
export const loader = async () => {
  const FAQresponse = await customFetch(FAQurl);
  const seriesResponse=await customFetch(seriesURL);
  const seriesData=seriesResponse.data;
  const faqs = FAQresponse.data;
  // console.log(faqs);
  console.log(seriesData);
  return { faqs, seriesData };
};

export default function Series() {
  return (
    <>
      <div className="px-4 md:px-10">
        <HeroCard />
        <Courses />
      </div>
      <FAQSection />
    </>
  );
}
