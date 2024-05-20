import React from "react";

export default function FooterLinksSection({label,children}) {
  return (
    <div className="self-start md:mb-10 ">
      <h2 class="mb-3 text-sm font-semibold uppercase text-white">{label}</h2>
      <ul class="text-gray-400 font-medium">
        {children}
        
      </ul>
    </div>
  );
}
