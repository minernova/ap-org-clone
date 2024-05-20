import React from "react";

export default function BannerButton({part}) {
  return (
    <button
      className="custom-shape rounded-md bg-gray-400 text-white ps-2 pe-4 py-1 font-medium text-xs"
      style={{
        clipPath: 'polygon(0 0, 90% 0, 80% 50%, 90% 100%, 0 100%)',
      }}
    >
      भाग {part}
    </button>
  );
}
