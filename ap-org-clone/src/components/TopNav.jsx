import React, { useTransition } from "react";
import NavbarLink from "./NavbarLink";
import NavbarDropdown from "./NavbarDropdown";
import SideDrawer from "./SideDrawer";
import NavbarDropdownLink from "./NavbarDropdownLink";
import { useTranslation } from "react-i18next";

export default function TopNav() {
  const { t } = useTranslation();
  return (
    <nav class="bg-orange ">
      <div class=" flex flex-wrap items-center   py-2 lg:py-0 px-4">
        <a
          href="#"
          class="flex items-center space-x-3 mr-7 rtl:space-x-reverse"
        >
          <img
            src="https://acharyaprashant.org/images/ic_favicon.png"
            class="h-8"
            alt="Flowbite Logo"
          />
        </a>

        <div class="hidden w-full lg:block md:w-auto" id="navbar-dropdown">
          <ul class="flex flex-col font-medium lg:p-4 md:p-0 mt-4 border text-white rounded-lg md:space-x-4  lg:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <NavbarLink label={t("home")} />
            <NavbarDropdown label={t("live_sessions")}>
              <NavbarDropdownLink label={t("gita_samagam")} />
              <NavbarDropdownLink label={t("vedanta_basics_to_classics")} />
            </NavbarDropdown>
            <NavbarLink label={t("video_series")} />
            <NavbarLink label={t("books")} />
            <NavbarLink label={t("articles")} />
            <NavbarDropdown label={t("invite")}>
              <NavbarDropdownLink label={t("for_a_talk")} />
              <NavbarDropdownLink label={t("for_an_interview")} />
            </NavbarDropdown>
            <NavbarLink label={t("press_publishing")} />
            <NavbarLink label={t("career")} />
            <NavbarLink label={t("donate")} />
          </ul>
        </div>

        <SideDrawer />
      </div>
    </nav>
  );
}
