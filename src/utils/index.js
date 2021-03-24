import { FORMAT_NUMBER_OPTIONS } from "configs";
import { createContext } from "react";

export const getContext = (() => {
  const contexts = {};

  return (name) => {
    if (contexts[name]) {
      return contexts[name]
    }
    contexts[name] = createContext();
    return contexts[name]
  }
})()

export const getFormatNumber = (() => {
  const locales = {};
  return (locale, number) => {
    if (!locales[locale]) {
      locales[locale] = new Intl.NumberFormat(locale, FORMAT_NUMBER_OPTIONS[locale])
    }
    return locales[locale].format(number)
  }
})()