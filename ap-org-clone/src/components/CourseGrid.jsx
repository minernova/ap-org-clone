import React from "react";
import BannerButton from "./BannerButton";
import CourseCard from "./CourseCard";

export default function CourseGrid() {
  return (
    <div class="grid w-full grid-cols-1 pt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div>
        <div class="h-auto w-full max-w-full rounded-lg">
          <CourseCard/>
        </div>
      </div>
      <div>
        <div class="h-auto max-w-full rounded-lg">
          <CourseCard/>
        </div>
      </div>
      <div>
        <div class="h-auto max-w-full rounded-lg">
          <CourseCard/>
        </div>
      </div>
      <div>
        <div class="h-auto max-w-full rounded-lg">
          <CourseCard/>
        </div>
      </div>
      <div>
        <div class="h-auto max-w-full rounded-lg">
          <CourseCard/>
        </div>
      </div>
      <div>
        <div class="h-auto max-w-full rounded-lg">
          <CourseCard/>
        </div>
      </div>
      <div>
        <div class="h-auto max-w-full rounded-lg">
          <CourseCard/>
        </div>
      </div>
      <div>
        <div class="h-auto max-w-full rounded-lg">
          <CourseCard/>
        </div>
      </div>
      <div>
        <div class="h-auto max-w-full rounded-lg">
          <CourseCard/>
        </div>
      </div>
      <div>
        <div class="h-auto max-w-full rounded-lg">
          <CourseCard/>
        </div>
      </div>
      <div>
        <div class="h-auto max-w-full rounded-lg">
          <CourseCard/>
        </div>
      </div>
      <div>
        <div class="h-auto max-w-full rounded-lg">
          <CourseCard/>
        </div>
      </div>
      
    </div>
  );
}
