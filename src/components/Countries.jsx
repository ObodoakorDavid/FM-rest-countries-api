/** @format */

import React, { useContext } from "react";
import AllContext from "../context/AllContext";
import { Link } from "react-router-dom";

const Countries = () => {
  const { countries } = useContext(AllContext);
  return (
    <div className="countries">
      {countries.map((eachCountry) => {
        const { name, flags, population, region, capital } = eachCountry;
        return (
          <div key={name.common} className="bg-elements rounded-3">
            <Link
              to={`/detail/${name.common}`}
              className="text-decoration-none main-text-color"
            >
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
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
