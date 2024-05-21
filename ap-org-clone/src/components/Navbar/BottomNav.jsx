import { Button, Navbar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import { useTranslation } from "react-i18next";

export default function BottomNav() {
  const [isSticky, setSticky] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { t } = useTranslation();

  const handleScroll = () => {
    setSticky(window.scrollY > 100?true:false);
    setShowCart(window.scrollY > 250?true:false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      class={`bg-white w-full h-auto border dark:bg-gray-900 flex justify-between items-center sm:px-2 md:px-3 ${
        isSticky ? "fixed top-0 left-0  z-20" : ""
      }`}
    >
      <div class=" flex flex-wrap w-full items-center justify-between md:justify-start p-4 self-start">
        <a
          href="https://acharyaprashant.org/images/ic_videoseries.png"
          class="flex items-center space-x-3 rtl:space-x-reverse mr-5"
        >
          <img
            src="https://acharyaprashant.org/images/ic_videoseries.png"
            class="h-8"
            alt="Flowbite Logo"
          />
        </a>
        <SearchBar />
      </div>
      {showCart && <a
        href="/hi/cart"
        class="inline-flex cursor-pointer items-center px-1.5 py-2"
        id="main-website-main-nav-bar-cart-icon"
      >
        <div class="flex items-center mr-4">
          <div class="relative">
            <div slot="icon" class="text-slate-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="19"
                viewBox="0 0 23 19"
                class="fill-current"
              >
                <path d="M8.094 14.263h11.568a.8.8 0 0 0 .567-.223.74.74 0 0 0 .241-.569.74.74 0 0 0-.241-.568.8.8 0 0 0-.567-.223H8.293a.85.85 0 0 1-.63-.243 1.13 1.13 0 0 1-.304-.64L5.763 1.188Q5.67.599 5.37.299 5.07 0 4.272 0H.83a.8.8 0 0 0-.577.243A.78.78 0 0 0 0 .822q0 .334.252.573t.577.238h3.244L5.627 11.99q.168 1.056.76 1.664.594.609 1.707.609m-1.785-3.47h13.405q1.124 0 1.717-.613.593-.615.76-1.68l.767-4.94.026-.202A1.4 1.4 0 0 0 23 3.175q0-.375-.268-.614-.267-.238-.73-.238H5.428l.021 1.572h15.673l-.661 4.443a1.16 1.16 0 0 1-.29.635q-.225.237-.624.238l-13.248.01zM8.881 19q.714 0 1.197-.472.482-.472.482-1.14 0-.67-.482-1.142-.483-.472-1.197-.472-.693 0-1.181.472a1.53 1.53 0 0 0-.488 1.141q0 .67.488 1.141.488.472 1.18.472m9.248 0q.693 0 1.181-.472t.488-1.14-.488-1.142a1.64 1.64 0 0 0-1.18-.472q-.694 0-1.192.472a1.5 1.5 0 0 0-.499 1.141q0 .67.499 1.141.499.472 1.191.472"></path>
              </svg>
            </div>{" "}
          </div>
        </div>
      </a>}
      
      <Button className="bg-orange enabled:hover:bg-orange enabled:hover:opacity-100 opacity-90 px-0 py-0 h-fit md:w-48 me-2 sm:me-5 ">
        {t("my_video_series")}
      </Button>
    </nav>
  );
}
