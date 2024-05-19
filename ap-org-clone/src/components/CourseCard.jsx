import React from "react";
import BannerButton from "./BannerButton";
import { getDuration } from "../utils";
import { useTranslation } from "react-i18next";

export default function CourseCard({course}) {
  const { t } = useTranslation();

  const {
    title,
    subtitle,
    language,
    amount,
    originalAmount,
    series: {
      order: { seq },
    },
    courseHours
  } = course;
  return (
    <>
      <div class=" p-6 bg-white border-b-2 border-gray-100 rounded-sm hover:rounded-lg hover:cursor-pointer hover:bg-gray-100">
        <BannerButton part={seq }/>
        <h5 class="mb-1 mt-5 text-md font-semibold  tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p class="mb-3 text-sm text-gray-500 dark:text-gray-400">
          {subtitle}
        </p>

        <p class="mb-2 mt-3 text-sm text-start text-gray-500 dark:text-gray-400">
          {getDuration(courseHours)}
        </p>
        <p class="mb-3 mt-2 text-sm text-gray-500 dark:text-gray-400">
          {t("contribution")+" "}:  ₹{amount + " "} <span className="line-through">₹{originalAmount}</span>
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
            {t('add_to_cart')}

          </a>
          <span className="border mx-5"></span>
          <a
            href="#"
            class="font-medium mr-10 text-xs text-orange hover:opacity-100 opacity-80"
          >
            {t('enroll')
}
          </a>
        </p>
      </div>
    </>
  );
}
