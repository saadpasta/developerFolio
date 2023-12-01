import React from "react";

const LanguageContext = React.createContext();

export const LanguageProvider = LanguageContext.Provider;
export const LanguageConsumer = LanguageContext.Consumer;

export default LanguageContext;
