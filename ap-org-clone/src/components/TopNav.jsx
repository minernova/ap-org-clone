import React from "react";
import NavbarLink from "./NavbarLink";
import NavbarDropdown from "./NavbarDropdown";
import SideDrawer from "./SideDrawer";

export default function TopNav() {
  return (
    <nav class="bg-orange ">
      <div class=" flex flex-wrap items-center   p-4">
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
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border text-white rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <NavbarLink label={"Home"} />
            <NavbarDropdown />
            <NavbarLink label={"Video Series"} />
            <NavbarLink label={"AP Books"} />
            <NavbarLink label={"AP Articles"} />
            <NavbarDropdown />
            <NavbarLink label={"In Media"} />
            <NavbarLink label={"Careers"} />
            <NavbarLink label={"Donate"} />
          </ul>
        </div>
        
        <SideDrawer />
      </div>
    </nav>
  );
}
