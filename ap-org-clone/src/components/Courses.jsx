import React from "react";
import CourseGrid from "./CourseGrid";
import SectionSubHeading from "./SectionSubHeading";

export default function Courses() {
  return <div className="mt-10">
    <SectionSubHeading label={"Video Series(8)"}/>
    <hr className="border-1" />
    <CourseGrid/>
  </div>;
}
