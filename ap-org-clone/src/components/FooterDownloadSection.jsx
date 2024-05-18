import React from "react";
import Link from "./Link";
import { NavbarBrand } from "flowbite-react";

export default function FooterDownloadSection() {
  return (
    <div className="">
      <h2 class="mb-3 text-sm font-semibold uppercase text-white">
        Download App
      </h2>
      <ul class="text-gray-400 font-medium">
        <li class="mb-1">
          <div className="flex">
            <img
              src="https://acharyaprashant.org/images/ic_favicon.png"
              className="mr-3 h-6 sm:h-6"
              alt="Flowbite React Logo"
            />{" "}
            Acharya Prashant
          </div>
        </li>
        <li class="mb-1">
        <img
              src="https://acharyaprashant.org/images/ic_googleplay.png"
              className="mr-3 mt-6 h-6 sm:h-9 border rounded-md"
              alt="Flowbite React Logo"
            />
        </li>
        <li class="mb-1">
        <img
              src="https://acharyaprashant.org/images/ic_appstore.png"
              className="mr-3 mt-3 h-6 sm:h-9 border rounded-md"
              alt="Flowbite React Logo"
            />
        </li>
      </ul>
    </div>
  );
}
