import React from "react";
import { Navbar, Button } from "flowbite-react";
export default function MiddleNav() {
  return (
    <div>
      <Navbar fluid className="bg-navy  text-white flex lg:justify-between ">
        <div className="flex justify-start mx-auto md:mx-0 text"> 
          <svg
            className="w-4 mr-1 justify-self-start place-self-start mt-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="#ff0000"
              d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
            />
          </svg>
          <span className="me-auto">
            Acharya Prashant is dedicated to building a brighter future for you.
          </span>
        </div>

        <span
          color="navy "
          className="border-solid rounded px-1 self-center border-white border-2  mx-auto sm:mx-2 p-0 sm:mt-0 mt-2"
          size="xs"
        >
          Extend Your Hand
        </span>
      </Navbar>
    </div>
  );
}
