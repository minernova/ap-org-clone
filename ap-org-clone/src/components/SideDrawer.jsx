"use client";

import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiOutlineArrowRight,
  HiUsers,
} from "react-icons/hi";

export default function SideDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className=" flex ms-auto items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="20"
              viewBox="0 0 17 16"
              class="fill-current mr-3"
              fill="none"
              >
              <path
              fill="none"
                stroke="#ffffff"
                d="m15.697 11.323-2.976-.862a1.1 1.1 0 0 0-1.098.292l-.727.747a1.08 1.08 0 0 1-1.179.251c-1.408-.574-4.369-3.228-5.125-4.556a1.1 1.1 0 0 1 .086-1.21l.635-.83c.249-.324.301-.76.137-1.135L4.198 1.166a1.105 1.105 0 0 0-1.733-.4C1.635 1.474.649 2.55.529 3.742c-.211 2.101.683 4.75 4.064 7.932 3.907 3.675 7.035 4.16 9.072 3.663 1.155-.282 2.078-1.413 2.661-2.338a1.122 1.122 0 0 0-.63-1.676"
              ></path>
            </svg>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange flex items-center justify-between hover:bg-orange"
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
          <span className="text-white">Menu</span>
        </button>
      </div>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        className="bg-white"
      >
        <Drawer.Header title="User" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/">Gita Samagam</Sidebar.Item>
                    <Sidebar.Item href="/e-commerce/products">
                      Vedant
                    </Sidebar.Item>
                    <Sidebar.Item href="/users/list" icon={HiUsers}>
                      Users list
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
                      Sign in
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="/authentication/sign-up"
                      icon={HiPencil}
                    >
                      Sign up
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item
                      href="https://github.com/themesberg/flowbite-react/"
                      icon={HiClipboard}
                    >
                      Docs
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="https://flowbite-react.com/"
                      icon={HiCollection}
                    >
                      Components
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="https://github.com/themesberg/flowbite-react/issues"
                      icon={HiInformationCircle}
                    >
                      Help
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
