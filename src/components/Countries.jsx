/** @format */

import React from "react";

const Countries = ({ data }) => {
  return (
    <div>
      {data?.map((eachCountry) => {
        const { name, idd, flags } = eachCountry;
        return (
          <div className=" p-3">
            <p>{name.common}</p>
            <img className="w-100" src={flags.svg} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
