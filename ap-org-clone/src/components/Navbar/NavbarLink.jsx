import React from "react";


export default function NavbarLink({label}) {
  return (
    <>
      <li className="hover:opacity-80">
        <a
          href="#"
          class="block py-2 px-3 text-white  rounded md:bg-transparent md:p-0  md:dark:bg-transparent"
          aria-current="page"
        >
          {label}
        </a>
      </li>
    </>
  );
}
