import { useState, useEffect } from "react";
import { getAllFilms } from "../api";
import { MovieDataType } from "../api/interfaces";

export type useFetchFilmListType = {
  isFeching: boolean;
  data: MovieDataType[];
};

export default function useFetchFilmList(): useFetchFilmListType {
  const [data, setData] = useState<MovieDataType[]>([]);
  const [isFeching, setIsFeching] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const data = await getAllFilms();
      if (mounted) {
        setData(data);
        setIsFeching(false);
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  return {
    data,
    isFeching,
  };
}
