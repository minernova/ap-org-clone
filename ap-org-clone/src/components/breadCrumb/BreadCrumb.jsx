import React from "react";
import CrumbLink from "./CrumbLink";
import { useLoaderData } from "react-router-dom";

export default function BreadCrumb() {
  const { seriesData } = useLoaderData();
  const { details: series } = seriesData;
  return (
    <div class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <CrumbLink label={"Home"} index={true} />
        <CrumbLink label={series.title} />
      </ol>
    </div>
  );
}
