import React from "react";
import FooterButtonYoutube from "../../footer/buttons/FooterButtonYoutube";
import FooterButtonTwitter from "../../footer/buttons/FooterButtonTwitter";
import FooterButtonFacebook from "../../footer/buttons/FooterButtonFacebook";
import FooterButtonInstagram from "../../footer/buttons/FooterButtonInstagram";
import FooterButtonWiki from "../../footer/buttons/FooterButtonWiki";
import FooterButtonThreads from "../../footer/buttons/FooterButtonThreads";
import { useTranslation } from "react-i18next";

export default function FooterSocialMediaSection() {
  const { t } = useTranslation();
  return (
    <div className="self-start">
      <h2 class="mb-3 text-sm font-semibold uppercase text-white">
        {t("social_media")}
      </h2>
      <ul class="text-gray-400 font-medium">
        <li class="mb-1">
          {t("for_english")}
          <div className="flex">
            <FooterButtonYoutube />
            <FooterButtonTwitter />
            <FooterButtonFacebook />
            <FooterButtonInstagram />
            <FooterButtonWiki />
          </div>
        </li>
        <li class="mb-1">
          {t("for_hindi")}
          <div className="flex">
            <FooterButtonYoutube />
            <FooterButtonTwitter />
            <FooterButtonThreads />
            <FooterButtonFacebook />
            <FooterButtonInstagram />
          </div>
        </li>
      </ul>
    </div>
  );
}
