/** @format */

import React from "react";
import Countries from "../components/Countries";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Homepage = ({ data }) => {
  return (
    <div>
      <Navbar />
      <div>
        <Search />
        <Countries data={data} />
      </div>
    </div>
  );
};

export default Homepage;
