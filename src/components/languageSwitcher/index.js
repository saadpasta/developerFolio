import React, {useContext} from "react";
import Dropdown from "../dropdown/Dropdown";
import {supportedLanguages} from "../../portfolio";
import {LanguageContext} from "../../contexts/LanguageContent";
import "./LanguageSwitcher.scss";

function LanguageSwitcher({
  className,
}) {
  const {selectedLanguage, handleLanguageChange} = useContext(LanguageContext);
  return (
    <>
      <Dropdown
        options={supportedLanguages}
        onSelect={selectedOption => handleLanguageChange(selectedOption.value)}
        selectedValue={selectedLanguage}
        className={className}
      />
    </>
  );
}

export default LanguageSwitcher;
