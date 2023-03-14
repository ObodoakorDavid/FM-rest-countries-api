/** @format */

import React from "react";

const Search = () => {
  const data = [
    "Filter by Region",
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ];
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
        <select className="w-50 mt-5 d-flex p-3" name="" id="">
          {data.map((each) => {
            return (
              <option key={each} value={each.toLowerCase()}>
                {each}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Search;
