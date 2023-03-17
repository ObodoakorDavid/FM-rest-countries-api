/** @format */

import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

const AllContext = createContext();

export default AllContext;

export const ContextProvider = ({ children }) => {
  const { data: countries } = useFetch("https://restcountries.com/v3.1/all");

  const [lightMode, setLightMode] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    if (lightMode === true) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [lightMode]);

  function filterCountries() {
    return countries?.filter((datum) =>
      datum.name.common
        .trim()
        .toLowerCase()
        .includes(userInput.trim().toLowerCase())
    );
  }
  console.log("gg");

  const data = {
    name: "David",
    countries: filterCountries(),
    lightMode,
    setLightMode,
    userInput,
    setUserInput,
  };
  return <AllContext.Provider value={data}>{children}</AllContext.Provider>;
};
