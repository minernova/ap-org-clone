import React from 'react'
import { useTranslation } from 'react-i18next'

export default function DrawerButton({setIsOpen}) {
    const {t}=useTranslation();
  return (
    <>
    <button
          onClick={() => setIsOpen(true)}
          className="bg-orange ms-0 md:ms-2 me-0 flex items-center justify-between hover:bg-orange"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="16"
            viewBox="0 0 22 16"
            className="fill-current mr-3"
          >
            <path
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.826"
              d="M1 1.609h20M1 8h20M1 14.391h20"
              fill="#ffffff"
            ></path>
          </svg>
          <span className="text-white mr-8">{t("menu")}</span>
        </button>
    </>
  )
}
