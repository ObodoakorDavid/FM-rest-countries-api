/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const CountryDetail = ({ country }) => {
  const navigate = useNavigate();
  return (
    <div className="text-start p-4 py-5">
      <div
        onClick={() => {
          navigate(-1);
        }}
      >
        <div className="d-flex justify-content-center align-items-center gap-3 bg-elements w-50 text-center py-1 rounded-1">
          <HiOutlineArrowNarrowLeft />
          <p className="m-0">Back</p>
        </div>
        <div className="w-100 text-start pt-5">
          <img className="w-100 pb-3" src={country[0].flags.svg} alt="" />
          <p className="py-4 fw-bold fs-3 m-0 ">{country[0].name.common}</p>
          <div className="details d-flex flex-column gap-2 pb-4">
            <div>
              <span className=" fw-semibold">Native Name</span>
              <span>: {country[0].name.nativeName.eng.official}</span>
            </div>
            <div>
              <span className=" fw-semibold">Population</span>
              <span>: {country[0].population}</span>
            </div>
            <div>
              <span className=" fw-semibold">Region</span>
              <span>: {country[0].region}</span>
            </div>
            <div>
              <span className=" fw-semibold">Sub Region</span>
              <span>: {country[0].subregion}</span>
            </div>
            <div>
              <span className=" fw-semibold">Capital</span>
              <span>: {country[0].capital[0]}</span>
            </div>
          </div>
          {/* =======  */}

          <div className="others d-flex flex-column gap-2 pb-4">
            <div>
              <span className=" fw-semibold">Top Level Domain</span>
              <span>: {country[0].tld[0]}</span>
            </div>
            <div>
              <span className=" fw-semibold">Currencies</span>
              <span>: {country[0].currencies.NGN.name}</span>
            </div>
            <div>
              <span className=" fw-semibold">Languages</span>
              <span>: {country[0].languages.eng}</span>
            </div>
          </div>
          {/* ===========  */}

          <div>
            <span className="fw-semibold fs-5">Border Countries:</span>
            <span className="d-flex justify-content-around py-2 ">
              {country[0].borders.map((eachborder) => {
                return (
                  <p className="bg-elements px-3 py-1 m-0 rounded-1">
                    {eachborder}
                  </p>
                );
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
