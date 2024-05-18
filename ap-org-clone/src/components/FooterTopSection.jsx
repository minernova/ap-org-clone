import React from "react";
import FooterLinksSection from "./FooterLinksSection";
import FooterSocialMediaSection from "./FooterSocialMediaSection";
import FooterDownloadSection from "./FooterDownloadSection";
import FooterContactSection from "./FooterContactSection";

export default function FooterTopSection() {
  return (
    <>
      <div class="grid grid-cols-1  gap-x-4 gap-y-6  md:px-1 py-6 lg:py-8 md:grid-cols-2 items-center align-top  lg:grid-cols-3">
        <FooterLinksSection />
        <FooterLinksSection />
        <FooterLinksSection />
        <FooterSocialMediaSection />
        <FooterDownloadSection />
        <FooterContactSection />
      </div>
    </>
  );
}
