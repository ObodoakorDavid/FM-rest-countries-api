/** @format */

import React from "react";
import Countries from "../components/Countries";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Homepage = ({ data, lightMode, setLightMode }) => {
  return (
    <div>
      <Navbar lightMode={lightMode} setLightMode={setLightMode} />
      <div className="main-content">
        <Search />
        <Countries data={data} />
      </div>
    </div>
  );
};

export default Homepage;
