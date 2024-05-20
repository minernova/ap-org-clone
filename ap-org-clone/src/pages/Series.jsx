import React from "react";
import HeroCard from "../components/series/HeroCard";
import FAQSection from "../components/faqs/FAQSection";
import { customFetch } from "../utils";
import BreadCrumb from "../components/breadCrumb/BreadCrumb";
import BottomBanner from "../components/BottomBanner/BottomBanner";
import Courses from "../components/series/Courses";

const FAQurl="/faqs?language=english"
const seriesURL="/series/optuser/course-series-eeb9d3"
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
      <div className="px-4 py-6 md:px-10">
        <BreadCrumb/>
        <HeroCard />
        <Courses />
      </div>
      <FAQSection />
      <BottomBanner/>
    </>
  );
}
