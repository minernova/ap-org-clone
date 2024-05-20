import React from "react";
import FooterBottomSection from "./FooterBottomSection";
import FooterTopSection from "./FooterTopSection";

export default function Footer() {
  return (
    <>
        
      <footer class="bg-navy">
        <div class="mx-auto  w-full px-10">
          <FooterTopSection />
          <hr className="md:w-5/6 mx-4 md:mx-auto mt-9 opacity-50" />
          <FooterBottomSection />
        </div>
      </footer>
    </>
  );
}
