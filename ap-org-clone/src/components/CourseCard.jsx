import React from "react";
import BannerButton from "./BannerButton";

export default function CourseCard() {
  return (
    <a href="">


    <div class=" p-6 bg-white border-b-2 border-gray-100 rounded-sm hover:rounded-lg hover:cursor-pointer hover:bg-gray-100">
      <BannerButton />
      <h5 class="mb-1 mt-5 text-md font-semibold  tracking-tight text-gray-900 dark:text-white">
        संत समागम परम सुख
      </h5>
      <p class="mb-3 text-sm text-gray-500 dark:text-gray-400">
        संतों के मुख्य दोहे पर आधारित{" "}
      </p>

      <p class="mb-2 mt-3 text-sm text-gray-500 dark:text-gray-400">
        2 hours 30 minutes
      </p>
      <p class="mb-3 mt-2 text-sm text-gray-500 dark:text-gray-400">
        Contribution: ₹21
      </p>
      <p class="mb-3 mt-2 text-sm text-gray-500 dark:text-gray-400">
        <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-1 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          Hindi
        </span>
      </p>
      <p class="mb-3 mt-2 text-sm text-gray-500 dark:text-gray-400">
        <div></div>
        <a
          href="#"
          class="font-medium text-xs text-orange hover:opacity-100 opacity-80"
        >
          ADD TO CART
        </a>
        <span className="border mx-5"></span>
        <a
          href="#"
          class="font-medium mr-10 text-xs text-orange hover:opacity-100 opacity-80"
        >
          ENROL
        </a>
        
        
      </p>
     
    </div>
    </a>
  );
}
