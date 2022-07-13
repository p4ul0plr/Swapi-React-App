import { BASE_URL } from "../constants";
import {
  CharactersResponse,
  FilmResponse,
  FilmsResponse,
  MovieDataType,
  MovieDetailType,
  PlanetsResponse,
  SpeciesResponse,
  StarshipsResponse,
  VehiclesResponse,
} from "../api/interfaces";
import { useFatch } from "../hooks/useFetch";

/* export function getAllFilms() {
  const { data: filmsResponse, isFeching } = useFatch<FilmsResponse>(BASE_URL);

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

  return { data, isFeching };
} */

const getIdFromUrl = (url: string) => {
  return Number(url.split("/").filter(Boolean).pop());
};

export const getAllFilms = async (): Promise<MovieDataType[]> => {
  const res = await fetch(BASE_URL);
  const resJson: FilmsResponse = await res.json();

  const editedMovieList = resJson.results.map((movie) => ({
    id: getIdFromUrl(movie.url),
    title: movie.title,
    description: movie.opening_crawl,
    releaseDate: movie.release_date,
  }));
  return editedMovieList;
};

export const getSingleFilm = async (id: number): Promise<MovieDetailType> => {
  const res = await fetch(`${BASE_URL}${id}/`);
  const resJson: FilmResponse = await res.json();
  const resCharacters = resJson?.characters.map((url) =>
    fetch(url)
      .then((data) => data.json())
      .then((c: CharactersResponse) => c.name)
  );
  const resPlanets = resJson?.planets.map((url) =>
    fetch(url)
      .then((data) => data.json())
      .then((c: PlanetsResponse) => c.name)
  );
  const resSpecies = resJson?.species.map((url) =>
    fetch(url)
      .then((data) => data.json())
      .then((c: SpeciesResponse) => c.name)
  );
  const resStarships = resJson?.starships.map((url) =>
    fetch(url)
      .then((data) => data.json())
      .then((c: StarshipsResponse) => c.name)
  );
  const resVehicles = resJson?.vehicles.map((url) =>
    fetch(url)
      .then((data) => data.json())
      .then((c: VehiclesResponse) => c.name)
  );

  const characters = await Promise.all(resCharacters);
  const planets = await Promise.all(resPlanets);
  const species = await Promise.all(resSpecies);
  const starships = await Promise.all(resStarships);
  const vehicles = await Promise.all(resVehicles);
  const data = {
    id: getIdFromUrl(resJson?.url || ""),
    characters,
    director: resJson?.director,
    description: resJson?.opening_crawl,
    planets,
    producer: resJson?.producer,
    releaseDate: resJson?.release_date,
    species,
    starships,
    title: resJson?.title,
    vehicles,
  };
  return data;
};
