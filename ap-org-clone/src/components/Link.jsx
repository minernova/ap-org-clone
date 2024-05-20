import React from "react";

export default function Link({label}) {
  return (
    <li className="mb-1">
    <a href="#" class="text-gray-400  hover:text-orange">
      {label}
    </a>

    </li>
  );
}
