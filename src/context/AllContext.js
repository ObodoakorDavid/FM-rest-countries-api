/** @format */

import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

const AllContext = createContext();

export default AllContext;

export const ContextProvider = ({ children }) => {
  const { data: countries, loading } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  const [lightMode, setLightMode] = useState(
    JSON.parse(localStorage.getItem("lightMode")) || false
  );
  const [selectedRegion, setSelectedRegion] = useState("");
  const [filterBy, setFilterBy] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [regionClicked, setRegionClicked] = useState(false);

  useEffect(() => {
    if (lightMode === true) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
    localStorage.setItem("lightMode", JSON.stringify(lightMode));
  }, [lightMode]);

  function filterCountries(filterCriteria) {
    let filtered = countries?.filter(
      (datum) => datum.region.toLowerCase() === selectedRegion.toLowerCase()
    );
    let tempdata = !regionClicked ? countries : filtered;
    if (filterCriteria === "userInput") {
      return tempdata.filter((datum) =>
        datum.name.common
          .trim()
          .toLowerCase()
          .includes(userInput.trim().toLowerCase())
      );
    } else if (filterCriteria === "region") {
      return tempdata.filter(
        (datum) => datum.region.toLowerCase() === selectedRegion.toLowerCase()
      );
    } else {
      return countries;
    }
  }

  const data = {
    countries: filterCountries(filterBy),
    lightMode,
    setLightMode,
    userInput,
    setUserInput,
    selectedRegion,
    setSelectedRegion,
    filterBy,
    setFilterBy,
    regionClicked,
    setRegionClicked,
    loading,
  };
  return <AllContext.Provider value={data}>{children}</AllContext.Provider>;
};
