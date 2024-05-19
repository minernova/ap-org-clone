import axios from "axios";

const productionUrl = "https://api.acharyaprashant.org/v2/legacy/courses";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const getDuration = (duration) => {
  const hours =
    Math.floor(duration) > 0 ? Math.floor(duration) + " hours " : "";
  const minutes =
    (duration - hours) * 60 > 0 ? +((duration - hours) * 60) + " minutes" : "";
  return hours + minutes;
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
