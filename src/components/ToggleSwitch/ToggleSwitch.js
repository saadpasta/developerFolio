import React, { useState, useContext } from "react";
import Toggle from "react-toggle"

import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.css";
// icons
import sun from "../../assets/images/sun.png"
import moon from "../../assets/images/moon.png"

const ToggleSwitch = () => {
  const [isChecked, setChecked] = useState(false);
  const styleContext = useContext(StyleContext);


  return (
    <Toggle
        // defaultChecked={state.isDark}
        icons={{
          checked: (
            <img
              src={moon}
              width="16"
              height="16"
              alt="moon"
              style={{
                pointerEvents: "none",
                width: "16px",
                heigth: "16px",
              }}
            />
          ),
          unchecked: (
            <img
              src={sun}
              width="16"
              height="16"
              alt="sun"
              style={{
                pointerEvents: "none",
                width: "16px",
                heigth: "16px",
              }}
            />
          ),
        }}
        aria-label="toggle dark mode"
        checked={isChecked}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
  );

};
export default ToggleSwitch;
