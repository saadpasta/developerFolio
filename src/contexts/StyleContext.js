import React from "react";

const StyleContext = React.createContext({isDark: "true"});

export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;
