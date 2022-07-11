import { FilmResponse, FilmsResponse, MovieDataType } from "../interfaces/api";
import { BASE_URL } from "../api";
import { useFatch } from "./useFetch";
import { useEffect, useState } from "react";

export function useFatchFilmList() {
  const { data: filmsResponse } = useFatch<FilmsResponse>(BASE_URL);
  // const [data, setData] = useState<MovieDataType[] | undefined>([]);

  const getIdFromUrl = (url: string) => {
    return Number(url.split("/").filter(Boolean).pop());
  };

  const results: FilmResponse[] | undefined = filmsResponse?.results;

  const data: MovieDataType[] | undefined = results?.map((film) => ({
    id: getIdFromUrl(film.url),
    title: film.title,
    description: film.opening_crawl,
    releaseDate: film.release_date,
  }));

  return { data };
}
