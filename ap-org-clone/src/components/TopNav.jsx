import React from "react";
import SideDrawer from "./Drawer";
import {
  Navbar,
} from "flowbite-react";
import NavLinks from "./NavLinks";

export default function TopNav() {
  return (
    <Navbar fluid className="bg-orange hover:bg-orange text-white">
      
        <NavLinks/>
      <SideDrawer />
    </Navbar>
  );
}
