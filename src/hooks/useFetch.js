import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
const useFetch = (endpoint) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    makeApiCall();
  }, [endpoint]);

  const makeApiCall = async () => {
    setLoading(true);
    const res = await fetchDataFromApi(endpoint);
    setData(res);
    setLoading(false);
  };

  return { data, loading };
};
export default useFetch;
