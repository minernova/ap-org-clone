"use client";

import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiOutlineArrowRight,
  HiUsers,
} from "react-icons/hi";
import LanguageSelector from "../Navbar/button/LanguageSelector/LanguageSelector";
import DonateButton from "../Navbar/button/DonateButton";
import PhoneButton from "../Navbar/button/PhoneButton";

export default function SideDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className=" flex ms-auto items-center justify-center ">
        <DonateButton />
        <LanguageSelector />
        <PhoneButton />

        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange ms-0 md:ms-2 me-0 flex items-center justify-between hover:bg-orange"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="16"
            viewBox="0 0 22 16"
            className="fill-current mr-3"
          >
            <path
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.826"
              d="M1 1.609h20M1 8h20M1 14.391h20"
              fill="#ffffff"
            ></path>
          </svg>
          <span className="text-white mr-8">{t("menu")}</span>
        </button>
      </div>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        className="bg-white p-0 w-full md:w-4/12 lg:3/12 md:text-start flex flex-col md:items-start  items-center  align-middle text-center z-50"
      >
        <Drawer.Header
          className="ps-7 pt-10"
          title="User"
          titleIcon={() => <></>}
        />
        <Drawer.Items className="ps-4">
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/">{t("gita_samagam")}</Sidebar.Item>
                    <Sidebar.Item href="/e-commerce/products">
                      {t("vedanta_basics_to_classics")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/users/list">{t("books")}</Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-in">
                      {t("articles")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("ap_circle")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("for_a_talk")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("for_an_interview")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("media_public_interaction")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("contact_us")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("career")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("donate")}
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>

                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("my_video_series")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("my_ebooks")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("recorded_sessions")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("my_cart")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("my_donations")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("my_orders")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("scholarship_requests")}
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item className="text-lg font-semibold m-0 p-0">
                      {t("learn_more")}
                    </Sidebar.Item>

                    <Sidebar.Item href="/authentication/sign-up">
                      {t("PAF")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("ghar_ghar_upanishad")}
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item className="text-lg font-semibold m-0 p-0">
                      {t("explore_categories")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("vedant_upanishads")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("vedant_bhagavad_gita")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("other_scriptures")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("saints_masters")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("other_streams")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("life_questions")}
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up">
                      {t("technical_support")}
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
        <button className="w-full mt-6 enabled:bg-gray-200 py-2 text-orange m-0">
          {" "}
          Logout
        </button>
      </Drawer>
    </>
  );
}
