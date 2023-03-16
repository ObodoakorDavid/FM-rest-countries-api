/** @format */

import React from "react";

const Countries = ({ data }) => {
  return (
    <div className="d-flex flex-column gap-5 ">
      {data?.map((eachCountry) => {
        const { name, idd, flags, population, region, capital } = eachCountry;
        return (
          <div key={name.common} className=" bg-elements rounded-3">
            <img className="w-100 rounded-top" src={flags.svg} alt="" />
            <div className="text-start ps-3 pb-5">
              <p className="py-3 fw-bold fs-3 ">{name.common}</p>
              <p className="mb-1">
                <span className="fw-semibold">Popuplation</span>: {population}{" "}
              </p>
              <p className="mb-1">
                <span className="fw-semibold">Region</span>: {region}{" "}
              </p>
              <p className="m-0">
                <span className="fw-semibold">Capital</span>: {capital}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
