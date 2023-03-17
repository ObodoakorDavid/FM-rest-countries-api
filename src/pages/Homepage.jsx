/** @format */

import React, { useContext } from "react";
import AllContext from "../context/AllContext";
import Countries from "../components/Countries";
import Search from "../components/Search";
import Layout from "../layout/Layout";

const Homepage = () => {
  const { countries} = useContext(AllContext);
  // console.log(countries);
  return (
    <div>
      <Layout>
        <div className="main-content">
          <Search />
          {countries ? <Countries /> : <p>Loading</p>}
        </div>
      </Layout>
    </div>
  );
};

export default Homepage;
