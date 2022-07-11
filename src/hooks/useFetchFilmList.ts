import { FilmResponse, FilmsResponse, MovieDataType } from "../interfaces/api";
import { BASE_URL } from "../api";
import { useFatch } from "./useFetch";

export function useFatchFilmList() {
  const { data: filmsResponse, isFeching } = useFatch<FilmsResponse>(BASE_URL);

  const getIdFromUrl = (url: string) => {
    return Number(url.split("/").filter(Boolean).pop());
  };

  const results: FilmResponse[] | undefined = filmsResponse?.results;

  const films: MovieDataType[] | undefined = results?.map((film) => ({
    id: getIdFromUrl(film.url),
    title: film.title,
    description: film.opening_crawl,
    releaseDate: film.release_date,
  }));

  return { films, isFeching };
}
