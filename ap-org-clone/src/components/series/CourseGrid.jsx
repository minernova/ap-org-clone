import React from "react";
import BannerButton from "../BottomBanner/BannerButton";
import CourseCard from "./CourseCard";

export default function CourseGrid({ courses }) {
  return (
    <div class="grid w-full grid-cols-1 pt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {courses.map((course, idx) => {
        
        return (
          <div>
            <div class="h-auto w-full max-w-full rounded-lg">
              <CourseCard key={idx} course={course} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
