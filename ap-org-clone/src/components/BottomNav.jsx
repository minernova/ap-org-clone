import { Button, Navbar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

export default function BottomNav() {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav class={`bg-white w-full h-auto border-gray-200 dark:bg-gray-900 flex justify-between items-center sm:px-2 md:px-3 ${isSticky ? 'fixed top-0 left-0  z-50' : ''}`}>
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
        <SearchBar/>
      </div>
        <Button className="bg-orange h-10 w-48 me-2 sm:me-5 ">  My Series</Button>
    </nav>
  );
}
