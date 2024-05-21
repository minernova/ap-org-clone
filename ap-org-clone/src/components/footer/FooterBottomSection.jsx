import React from "react";
import Link from "../Link";
import { useTranslation } from "react-i18next";

export default function FooterBottomSection() {
  const { t } = useTranslation();

  return (
    <div class="px-4 mx-auto py-6  bg-navy md:flex md:items-center md:justify-around pb-28">
      <span class="text-xs md:text-sm text-gray-300 sm:text-center">
        {t("copyright")}
      </span>
      <div class="flex mt-4 text-xs md:text-sm md:justify-center md:mt-0 space-x-2 rtl:space-x-reverse">
        <Link label={t("terms_conditions")} />
        <div className="border border-gray-400"></div>
        <Link label={t("privacy_policy")} />
        <div className="border border-gray-400"></div>
        <Link label={t("undertaking")} />
      </div>
    </div>
  );
}
