/** @format */

import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, [url]);
  return { data, error, loading };
};
