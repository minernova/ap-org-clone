import React from "react";

export default function Link({label}) {
  return (
    <a href="#" class="text-gray-400 hover:text-orange">
      {label}
    </a>
  );
}
