import React from "react";
import HeroCard from "../components/HeroCard";
import Courses from "../components/Courses";
import FAQSection from "../components/FAQSection";

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
