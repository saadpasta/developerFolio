import React, {useRef} from "react";
import "./Dropdown.scss";

const Dropdown = ({className, options, selectedValue, onSelect, disabled}) => {
  const selectRef = useRef(null);

  const handleChange = event => {
    const selectedOption = options.find(
      option => option.value === event.target.value
    );
    if (selectedOption) {
      onSelect(selectedOption);
    } else {
      // Handle invalid selection (e.g., display error message)
    }
  };
  //You can add labels if you want
  return (
    <div className={className}>
      <select
        ref={selectRef}
        value={selectedValue}
        onChange={handleChange}
        disabled={disabled}
        aria-expanded={selectRef.current?.open} // Accessibility: Update on open/close
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
