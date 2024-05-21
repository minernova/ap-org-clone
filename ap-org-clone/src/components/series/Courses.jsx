import React from "react";
import CourseGrid from "./CourseGrid";
import SectionSubHeading from "./SectionSubHeading";
import { useLoaderData } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Courses() {
  const { seriesData } = useLoaderData();
  const { courses } = seriesData;
  const { t } = useTranslation();

  console.log(courses);

  return (
    <div className="mt-10">
      <SectionSubHeading label={`${t("video_series")} (${courses.length})`} />
      <hr className="border-1" />
      <CourseGrid courses={courses} />
    </div>
  );
}
