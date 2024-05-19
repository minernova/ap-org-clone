import React from "react";
import CourseGrid from "./CourseGrid";
import SectionSubHeading from "./SectionSubHeading";
import { useLoaderData } from "react-router-dom";

export default function Courses() {
  const {seriesData}=useLoaderData();
  const {courses} = seriesData;
  
  console.log(courses);

  return (
    <div className="mt-10">
      <SectionSubHeading label={`Video Series(${courses.length})`} />
      <hr className="border-1" />
      <CourseGrid courses={courses} />
    </div>
  );
}
