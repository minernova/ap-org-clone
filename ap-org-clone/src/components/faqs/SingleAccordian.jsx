import { Flowbite, theme } from "flowbite-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import { customTheme } from "../../utils";

export default function SingleAccordian({ question, answer }) {
  return (
    <Accordion theme={customTheme["root"]} className="border-none " collapseAll>
      <AccordionPanel>
        <AccordionTitle
          theme={customTheme["title"]}
          className="flex antialiased items-center justify-between  w-full lg:px-5 font-semibold text-sm rtl:text-right text-gray-500 bg-gray-50  gap-3"
        >
          {question}
        </AccordionTitle>
        <AccordionContent
          theme={customTheme["content"]}
          className="pb-5 antialiased tracking-wider text-sm lg:px-5 mb-2 text-gray-500 dark:text-gray-400"
        >
          {answer.startsWith("<p>") && answer.endsWith("</p>")
            ? answer.substring(3, answer.length - 4)
            : answer}
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel></AccordionPanel>
    </Accordion>
  );
}
