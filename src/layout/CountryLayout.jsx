/** @format */

import React from "react";
import CountryDetail from "../pages/CountryDetail";
import Layout from "./Layout";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const CountryLayout = () => {
  const { name } = useParams();
  const {
    data: country,
    error,
    loading,
  } = useFetch(`https://restcountries.com/v3.1/name/${name}`);
  
  return (
    <Layout>
      {country && <CountryDetail country={country} />}
      {error && <p>SomeThing went wrong</p>}
      {loading && <p>Loading</p>}
    </Layout>
  );
};

export default CountryLayout;
