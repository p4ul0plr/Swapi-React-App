import { useEffect, useState } from "react";
import axios from "axios";

export function useFatch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isFeching, setIsFeching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsFeching(false);
      });
  }, []);

  return { data, isFeching, error };
}
