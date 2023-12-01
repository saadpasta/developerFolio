import React, {useState, useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";
import "./LanguageToggleSwitch.scss";

const LanguageToggleSwitch = () => {
  const {lang} = useContext(LanguageContext);
  const [isChecked, setChecked] = useState(lang === "it");
  const languageContext = useContext(LanguageContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={lang === "it"}
        onChange={() => {
          languageContext.changeLang();
          setChecked(lang === "it");
        }}
      />
      <span
        className={lang === "it" ? " slider round ita" : "slider round eng"}
      ></span>
    </label>
  );
};
export default LanguageToggleSwitch;
