import React from "react";
import Link from "./Link";
import FooterButtonYoutube from "./FooterButtonYoutube";
import FooterButtonTwitter from "./FooterButtonTwitter";
import FooterButtonFacebook from "./FooterButtonFacebook";
import FooterButtonInstagram from "./FooterButtonInstagram";
import FooterButtonWiki from "./FooterButtonWiki";
import FooterButtonThreads from "./FooterButtonThreads";

export default function FooterSocialMediaSection() {
  return (
    <div className="">
      <h2 class="mb-3 text-sm font-semibold uppercase text-white">Company</h2>
      <ul class="text-gray-400 font-medium">
        <li class="mb-1">
          For English
          <div className="flex">
                <FooterButtonYoutube/>
                <FooterButtonTwitter/>
                <FooterButtonFacebook/>
                <FooterButtonInstagram/>
                <FooterButtonWiki/>

          </div>
        </li>
        <li class="mb-1">
            For Hindi
          <div className="flex">
                <FooterButtonYoutube/>
                <FooterButtonTwitter/>
                <FooterButtonThreads/>
                <FooterButtonFacebook/>
                <FooterButtonInstagram/>

          </div>
        </li>
       
      </ul>
    </div>
  );
}
