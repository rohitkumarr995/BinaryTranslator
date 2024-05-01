import React, { useState } from "react";

function DestDropdown({ option, handleDataFromChild }) {
  const [selectedOption, setSelectedOption] = useState("Select");

  const optionMap = new Map();
  optionMap.set("Decimal", ["Select", "Binary", "Hex"]);
  optionMap.set("Binary", ["Select", "Text", "Hex", "Decimal"]);
  optionMap.set("Hex", ["Select", "Decimal", "Binary"]);
  optionMap.set("Text", ["Select", "Hex", "ASCII", "Binary"]);
  optionMap.set("ASCII", ["Select", "Binary", "Text"]);

  const dropdownArray = optionMap.get(option);

  const selectOption = (event) => {
    setSelectedOption(event.target.value);
    handleDataFromChild(event.target.value);
  };

  return (
    <>
      <div className="dropdown-2">
        <select
          name="to-converter"
          id="dropdown-dest"
          value={selectedOption}
          onChange={selectOption}
          className="dest-dropdown-2"
        >
          {option !== null ? (
            dropdownArray.map((dropdwonValue) => (
              <option  value={dropdwonValue}>{dropdwonValue}</option>
            ))
          ) : (
            <>
              <option value="Select">Select</option>
              <option value="Decimal">Decimal</option>
              <option value="Binary">Binary</option>
            </>
          )}
        </select>
      </div>
    </>
  );
}

export default DestDropdown;
