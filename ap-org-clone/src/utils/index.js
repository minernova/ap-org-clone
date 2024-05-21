import axios from "axios";
import { useTranslation } from "react-i18next";

const productionUrl = "https://api.acharyaprashant.org/v2/legacy/courses";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const getDuration = (duration) => {
  const { t } = useTranslation();
  const hours=Math.floor(duration);
  const minutes =Math.floor((duration - hours) * 60);
  const hoursString=    Math.floor(duration) > 0 ? Math.floor(duration) + ` ${t('hours') }` : "";
    console.log(((duration-hours)*60)>0);
  const minutesString =
    minutes > 0 ? ` ${minutes} ${t('minutes')}`  : "";
  return hoursString +"  "+ minutesString;
};

export const customTheme = {
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
