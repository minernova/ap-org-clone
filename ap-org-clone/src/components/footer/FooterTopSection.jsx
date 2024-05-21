import React from "react";
import FooterLinksSection from "./section/FooterLinksSection";
import FooterSocialMediaSection from "./section/FooterSocialMediaSection";
import FooterDownloadSection from "./section/FooterDownloadSection";
import FooterContactSection from "./section/FooterContactSection";
import { useTranslation } from "react-i18next";
import Link from "../Link";

export default function FooterTopSection() {
  const { t } = useTranslation();
  return (
    <>
      <div class="grid grid-cols-1  gap-x-4 gap-y-6  md:ps-28 py-6 lg:py-8 md:grid-cols-2 items-center align-top  lg:grid-cols-3">
        <FooterLinksSection label={t("live_sessions")}>
          <Link label={t("gita_samagam")} />
          <Link label={t("vedanta_basics_to_classics")} />
        </FooterLinksSection>

        <FooterLinksSection label={t("wisdom_content")}>
          <Link label={t("video_series")} />
          <Link label={t("books")} />
          <Link label={t("articles")} />
          <Link label={t("ap_circle")} />
        </FooterLinksSection>

        <FooterLinksSection label={t("learn_more")}>
          <Link label={t("about_acharya_prashant")} />
          <Link label={t("invite")} />
          <Link label={t("for_an_interview")} />
          <Link label={t("ghar_ghar_upanishad")} />
          <Link label={t("media_public_interaction")} />
        </FooterLinksSection>

        <FooterSocialMediaSection />

        <FooterDownloadSection />

        <FooterContactSection />
      </div>
    </>
  );
}
