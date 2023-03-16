/** @format */

import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Search = ({ setSelectedRegion }) => {
  const data = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="d-md-flex justify-content-between align-items-sm-center p-3 py-5 py-md-3 px-md-0">
      <form className="w-100">
        <input
          className="w-100 p-3 rounded-3"
          placeholder="Search for a country..."
          type="text"
          onChange={(e) => {
            setSelectedRegion(e.target.value.toLowerCase());
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
          <li>Filter by Region</li>
          <li
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <MdKeyboardArrowDown />
          </li>
        </ul>

        {isOpen && (
          <ul
            className={`options w-50 rounded-2 p-3 d-flex flex-column ${
              isOpen ? "active" : ""
            }`}
          >
            {data.map((datum) => {
              return (
                <li
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  key={datum}
                  className="p-1 rounded-1"
                >
                  {datum}
                </li>
              );
            })}
          </ul>
        )}
        {/* <select className="w-50 mt-5 d-flex p-3" name="" id="">
          {data.map((each) => {
            return (
              <option key={each} value={each.toLowerCase()}>
                {each}
              </option>
            );
          })}
        </select> */}
      </div>
    </div>
  );
};

export default Search;
