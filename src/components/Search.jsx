/** @format */

import React, { useContext, useState } from "react";
import AllContext from "../context/AllContext";
import { MdKeyboardArrowDown } from "react-icons/md";

const Search = () => {
  const {
    setSelectedRegion,
    selectedRegion,
    userInput,
    setUserInput,
    setFilterBy,
    regionClicked,
    setRegionClicked,
  } = useContext(AllContext);

  const data = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [isOpen, setIsOpen] = useState(false);

  const transformState = isOpen ? "rotate(180deg)" : "rotate(0deg)";
  const isActive = isOpen ? "active" : "";
  const dropDownText = regionClicked ? selectedRegion : "Filter By Region";

  return (
    <div className="d-md-flex justify-content-between align-items-sm-center px-0 py-5 py-md-3 px-md-0">
      <form className="w-100">
        <input
          className="w-100 p-3 rounded-3"
          placeholder="Search for a country..."
          type="text"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value.toLowerCase());
            // setRegionClicked(false);
            setFilterBy("userInput");
          }}
        />
      </form>
      <div className="select-container w-100 d-md-flex justify-content-end py-3">
        <ul
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="d-flex justify-content-between p-3 align-items-center w-50 mt-3 rounded-2"
        >
          <li>{dropDownText}</li>
          <li
            style={{
              transform: transformState,
            }}
          >
            <MdKeyboardArrowDown />
          </li>
        </ul>

        {isOpen && (
          <ul
            className={`options w-50 rounded-2 p-3 d-flex flex-column ${isActive}`}
          >
            {data.map((datum) => {
              return (
                <li
                  onClick={(e) => {
                    setIsOpen(false);
                    setRegionClicked(true);
                    setSelectedRegion(datum);
                    setFilterBy("region");
                  }}
                  key={datum}
                  className="p-1 rounded-1"
                  value={datum}
                >
                  {datum}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
