import React from "react";
import Link from "./Link";

export default function FooterLinksSection() {
  return (
    <div className="self-start ">
      <h2 class="mb-3 text-sm font-semibold uppercase text-white">Company</h2>
      <ul class="text-gray-400 font-medium">
        <li class="mb-1">
          <Link/>
        </li>
        <li class="mb-1">
          <a href="#" class="hover:underline">
            Careers
          </a>
        </li>
        <li class="mb-1">
          <a href="#" class="hover:underline">
            Brand Center
          </a>
        </li>
        <li class="mb-1">
          <a href="#" class="hover:underline">
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
}
