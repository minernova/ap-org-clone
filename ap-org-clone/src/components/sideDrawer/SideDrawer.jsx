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
import DrawerButton from "./button/DrawerButton";
import SidebarItems from "./SidebarItems";

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

        <DrawerButton setIsOpen={setIsOpen}/>
      </div>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        className="bg-white p-0 w-full md:w-4/12 lg:2/12 md:text-start flex flex-col md:items-start  items-center  align-middle text-center z-50"
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
            <SidebarItems/>
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
