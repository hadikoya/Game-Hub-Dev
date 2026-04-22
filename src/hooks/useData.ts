import { useEffect, useState } from "react";
import apiClinte from "../services/api-clinte";
import { AxiosRequestConfig, CanceledError } from 'axios';


interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect( () => {
    const controller = new AbortController();
    setLoading(true);
    apiClinte.get<FetchResponse<T>>(endpoint, { ...requestConfig, signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
    
  }, [endpoint, ...(deps || [])]);

  return { data, error, loading };
};
export default useData;