/** @format */

import React, { useContext } from "react";
import AllContext from "../context/AllContext";
import Countries from "../components/Countries";
import Search from "../components/Search";
import Layout from "../layout/Layout";
import Loading from "../utils/Loading";

const Homepage = () => {
  const { countries, loading } = useContext(AllContext);
  // console.log(countries);
  return (
    <div>
      <Layout>
        <div className="main-content">
          <Search />
          {countries ? <Countries /> : <Loading loading={loading} />}
        </div>
      </Layout>
    </div>
  );
};

export default Homepage;
