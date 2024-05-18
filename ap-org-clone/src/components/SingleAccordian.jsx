import { Flowbite, theme } from "flowbite-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
const customTheme = {
  root: {
    // style for the entire accordion container
    base: "",
    flush: {
      // "flush" options are added to base. "off" is default.
      off: "",
      on: "",
    },
  },
  content: {
    // style for content block when expanded
    base: " ",
  },
  title: {
    arrow: {
      base: "h-6 w-6 shrink-0",
      open: {
        off: "",
        on: "rotate-180",
      },
    },
    // style for button that encloses a collapsed, clickable title
    base: "flex w-full items-center justify-between  pb-3 lg:px-3 text-left ",
    flush: {
      // "flush" options are added to base. off seems to be the default
      off: "",
      on: "",
    },
    // 'heading' styles both collapsed and uncollapsed headings and overrides base
    heading: "",
    open: {
      off: "",
      // style for opened titles
      on: "font-bold",
    },
  },
};
export default function SingleAccordian() {
  return (
    <Accordion theme={customTheme["root"]} className="border-none " collapseAll>
      <AccordionPanel >
        <AccordionTitle
          theme={customTheme["title"]}
          className="flex items-center justify-between w-full lg:px-5 font-medium rtl:text-right text-gray-500 bg-gray-50  gap-3"
        >
          What is Flowbite?
        </AccordionTitle>
        <AccordionContent
          theme={customTheme["content"]}
          className="pb-5 lg:px-5"
        >
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-gray-500 ">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel></AccordionPanel>
    </Accordion>
  );
}
