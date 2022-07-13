import { useState, useEffect } from "react";
import { getSingleFilm } from "../api";
import { MovieDetailType } from "../api/interfaces";

export type UseFetchFilmDetailType = {
  data: MovieDetailType;
  isFeching: boolean;
};

export default function useFetchFilmDetail(id: number): UseFetchFilmDetailType {
  const [data, setData] = useState<MovieDetailType>({
    id: null,
    releaseDate: null,
    title: null,
    director: null,
    producer: null,
    description: null,
    characters: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
  });
  const [isFeching, setIsFeching] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const data = await getSingleFilm(id);
      if (mounted) {
        setData(data);
        setIsFeching(false);
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, [id]);

  return {
    isFeching,
    data,
  };
}
