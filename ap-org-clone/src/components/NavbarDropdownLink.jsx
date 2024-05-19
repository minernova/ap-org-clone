import React from "react";

export default function NavbarDropdownLink({ label }) {
  return (
    <div  className="text-gray-500 cursor-pointer py-2 px-4 font-medium text-sm w-max">
      {label}
    </div>
  );
}
