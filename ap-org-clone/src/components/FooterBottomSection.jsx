import React from 'react'
import Link from './Link'

export default function FooterBottomSection() {
  return (
    <div class="px-4 mx-auto py-6  bg-navy md:flex md:items-center md:justify-around pb-28">
        
            <span class="text-xs md:text-sm text-gray-300 sm:text-center">
              © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
              Reserved.
            </span>
            <div class="flex mt-4 text-xs md:text-sm md:justify-center md:mt-0 space-x-2 rtl:space-x-reverse">
              <Link/>
              <div className='border border-gray-400'></div>
              <Link/>
              <div className='border border-gray-400'></div>
              <Link/>
              
            </div>
          </div>
  )
}
