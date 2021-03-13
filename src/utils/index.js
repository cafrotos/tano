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