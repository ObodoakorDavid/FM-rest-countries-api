/** @format */

import React, { useState } from "react";

const Search = () => {
  const data = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="d-sm-flex justify-content-between p-3">
      <form>
        <input
          className=" w-100 p-3 rounded-3"
          placeholder="Search for a country..."
          type="text"
        />
      </form>
      <div className="select-container">
        <ul
          onClick={() => {
            setIsOpen(true);
          }}
          className="d-flex justify-content-between p-3 align-items-center w-50 mt-3 rounded-2"
        >
          <li>Filter by Region</li>
          <li>f</li>
        </ul>

        {isOpen && (
          <ul
            className={`options w-50 rounded-2 p-3 d-flex flex-column gap-1 ${
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
