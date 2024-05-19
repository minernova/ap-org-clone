import React from "react";
import FooterLinksSection from "./FooterLinksSection";
import FooterSocialMediaSection from "./FooterSocialMediaSection";
import FooterDownloadSection from "./FooterDownloadSection";
import FooterContactSection from "./FooterContactSection";
import { useTranslation } from "react-i18next";
import Link from "./Link";

export default function FooterTopSection() {
  const { t } = useTranslation();
  return (
    <>
      <div class="grid grid-cols-1  gap-x-4 gap-y-6  md:ps-28 py-6 lg:py-8 md:grid-cols-2 items-center align-top  lg:grid-cols-3">
        <FooterLinksSection label={t("live_sessions")}>
          <li class="mb-1">
            <Link label={t("gita_samagam")} />
          </li>
          <li class="mb-1">
            <Link label={t("vedanta_basics_to_classics")} />
          </li>
        </FooterLinksSection>

        <FooterLinksSection label={t("wisdom_content")}>
          <li class="mb-1">
            <Link label={t("video_series")} />
          </li>
          <li class="mb-1">
            <Link label={t("books")} />
          </li>
          <li class="mb-1">
            <Link label={t("articles")} />
          </li>
          <li class="mb-1">
            <Link label={t("ap_circle")} />
          </li>
        </FooterLinksSection>
        <FooterSocialMediaSection />
        <FooterDownloadSection />
        <FooterContactSection />
      </div>
    </>
  );
}
