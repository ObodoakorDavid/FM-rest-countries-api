/** @format */

import React from "react";
import CountryDetail from "../pages/CountryDetail";
import Layout from "./Layout";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loading from "../utils/Loading";

const CountryLayout = () => {
  const { name } = useParams();
  const {
    data: country,
    error,
    loading,
  } = useFetch(`https://restcountries.com/v3.1/name/${name}`);
  console.log(loading);

  return (
    <Layout>
      {country && <CountryDetail country={country} />}
      {error && <p>SomeThing went wrong</p>}
      {loading && <Loading loading={loading} />}
    </Layout>
  );
};

export default CountryLayout;
