/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const CountryDetail = ({ country }) => {
  const navigate = useNavigate();
  const eachCountry = country[0];
  const currencyText = eachCountry.currrencies
    ? Object.values(eachCountry.currencies)[0].name
    : "No Currency for this Country";

  const languages = Object.values(eachCountry.languages).map(
    (language, index) => <span key={index}>{`${language}, `}</span>
  );

  const borders = eachCountry.borders ? (
    eachCountry.borders.map((eachborder, index) => {
      return (
        <p key={index} className="bg-elements px-3 py-1 m-0 rounded-1">
          {eachborder}
        </p>
      );
    })
  ) : (
    <p className="w-100 m-0">No Border for this Country</p>
  );
  // console.log(languages);
  //   const {} = country[0] ? country[0] : null;
  // console.log(Object.values(eachCountry.currencies)[0].name);
  console.log(eachCountry.borders);

  return (
    <div className="text-start p-4 p-md-5 py-5">
      <div>
        <div
          onClick={() => {
            navigate(-1);
          }}
          className="back-btn d-flex justify-content-center align-items-center gap-3 bg-elements text-center py-1 rounded-1 w-"
        >
          <HiOutlineArrowNarrowLeft />
          <p className="m-0">Back</p>
        </div>
        <div className="w-100 text-start pt-5 d-xl-flex gap-xl-5">
          <img className="pb-3 detail-img" src={eachCountry.flags.svg} alt="" />

          <div className=" flex-xl-grow-1">
            <div className="d-xl-flex align-items-xl-center gap-5">
              <div className="details d-flex flex-column gap-2 pb-4 ps-xl-4">
                <p className="py-4 fw-bold fs-3 m-0 ">
                  {eachCountry.name.common}
                </p>
                <div>
                  <span className=" fw-semibold">Native Name</span>
                  <span>: {eachCountry.name.official}</span>
                </div>
                <div>
                  <span className=" fw-semibold">Population</span>
                  <span>: {eachCountry.population.toLocaleString()}</span>
                </div>
                <div>
                  <span className=" fw-semibold">Region</span>
                  <span>: {eachCountry.region}</span>
                </div>
                <div>
                  <span className=" fw-semibold">Sub Region</span>
                  <span>: {eachCountry.subregion}</span>
                </div>
                <div>
                  <span className=" fw-semibold">Capital</span>
                  <span>: {eachCountry.capital?.[0]}</span>
                </div>
              </div>
              {/* =======  */}

              <div className="others d-flex flex-column gap-2 pb-4">
                <div>
                  <span className=" fw-semibold">Top Level Domain</span>
                  <span>: {eachCountry.tld[0]}</span>
                </div>
                <div>
                  <span className=" fw-semibold">Currencies</span>
                  <span>: {currencyText}</span>
                </div>
                <div>
                  <span className=" fw-semibold">Languages</span>
                  <span>: {languages}</span>
                </div>
              </div>
              {/* ===========  */}
            </div>
            <div className="ps-xl-4 d-xxl-flex align-items-xl-center gap-xl-3">
              <span className="fw-semibold fs-5">Border Countries:</span>
              <span className="d-flex flex-wrap gap-2 gap-sm-0 w-75 justify-content-around justify-content-lg-evenly flex-xl-grow-1 py-2 ">
                {borders}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
