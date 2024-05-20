import React from "react";

export default function BottomBanner() {
  return (
    <div class="fixed bottom-0 left-0 right-0 z-50 bg-orange w-full bg-brand-100 px-4 py-5 lg:hidden">
      <div class="flex items-center justify-between">
        <div class="pr-1 font-medium text-white">
          <span>130+ ईबुक्स ऍप में पढ़ें</span>
        </div>{" "}
        <div class="text-xs font-medium md:text-sm">
          <button class="flex items-center rounded-full hover:bg-brand-700 hover:text-white btn-lg shadow-none h-full text-white btn-type-solid">
            <div class="flex items-center justify-center whitespace-nowrap">
              <div class="mr-1  text-white h-4 w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  class="fill-current"
                >
                  <path
                    fill="none"
                    stroke="#FFF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.2"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m-2.5-3.258h5M10 8.129l-2 2.065m0 0L6 8.129m2 2.065V4"
                    
                  ></path>
                </svg>
              </div>{" "}
              <span >ऐप डाउनलोड करें</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
