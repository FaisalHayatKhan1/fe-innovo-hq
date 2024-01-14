// config
import { defaultSettings, cookiesKey } from "@root/config";

// ----------------------------------------------------------------------

export const getSettings = (cookies: any) => {
  const themeMode =
    getData(cookies[cookiesKey.themeMode]) || defaultSettings.themeMode;

  const themeDirection =
    getData(cookies[cookiesKey.themeDirection]) ||
    defaultSettings.themeDirection;

  const themeColorPresets =
    getData(cookies[cookiesKey.themeColorPresets]) ||
    defaultSettings.themeColorPresets;

  return {
    themeMode,
    themeDirection,
    themeColorPresets,
  };
};

// ----------------------------------------------------------------------

const getData = (value: any) => {
  if (value === "true" || value === "false") {
    return JSON.parse(value);
  }
  if (value === "undefined" || !value) {
    return "";
  }
  return value;
};
