import { useCallback, useEffect } from "react";
import { useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.message || "Failed to send Request");
  }

  console.log(resData);
  return resData;
}
export default function useHttp(url, config, initialData) {
  const [error, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialData);

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setLoading(true);
      try {
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
      } catch (error) {
        setErrors(error.message || "SomeThings are wrong");
      }
      setLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    error,
    loading,
    data,
    sendRequest,
  };
}
