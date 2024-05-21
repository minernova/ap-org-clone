import React from "react";
import SocialButtons from "./SocialButtons";
import SectionHeading from "./SectionHeading";
import { useLoaderData } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeroImage from "./HeroImage";

export default function HeroCard() {
  const { seriesData } = useLoaderData();
  const { details: series } = seriesData;
  const { t } = useTranslation();
  console.log(series);
  return (
    <div className="mt-8">
      <SectionHeading label={series.title} />

      <div class="flex flex-col md:items-start items-center md:flex-row  ">
        <HeroImage id={series.thumbnail.id}/>
        <div class="flex flex-col justify-start self-stretch mt-10 md:mt-0  px-4 ">
          <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-700">
            {series.subtitle}
          </h5>
          <p class="mb-3 font-light text-sm text-gray-700 tracking-wide">
            {series.description}
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <h2 class="flex flex-col justify-start mt-4">
          {t("share_this_series")}
        </h2>
        <SocialButtons />
      </div>
    </div>
  );
}
