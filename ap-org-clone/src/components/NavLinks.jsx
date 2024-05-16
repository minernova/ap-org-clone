import React from 'react'

import TextDropdown from "./TextDropdown";

import {
    Dropdown,
    DropdownItem,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
export default function NavLinks() {
  return (
    <div><NavbarBrand href="">
    <img
      src="https://acharyaprashant.org/images/ic_favicon.png"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite React Logo"
    />
    <NavbarCollapse className="ms-5">
      <NavbarLink href="#" className="text-white">
        Home
      </NavbarLink>
          {/* <TextDropdown/> */}
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={"Live Sessions" }
        >
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarLink href="#" className="text-white">
        AP Books
      </NavbarLink>
      <NavbarLink href="#" className="text-white">
        AP Articles
      </NavbarLink>
      <NavbarLink href="#" className="text-white">
        Invite
      </NavbarLink>
      <NavbarLink href="#" className="text-white">
        In Media
      </NavbarLink>
      <NavbarLink href="#" className="text-white">
        Careers
      </NavbarLink>
      <NavbarLink href="#" className="text-white">
        Donate
      </NavbarLink>
    </NavbarCollapse>
  </NavbarBrand></div>
  )
}
