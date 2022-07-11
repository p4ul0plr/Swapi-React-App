import {
  CharactersResponse,
  FilmResponse,
  MovieDetailType,
  PlanetsResponse,
  SpeciesResponse,
  StarshipsResponse,
  VehiclesResponse,
} from "../interfaces/api";
import { BASE_URL } from "../api";
import { useFatch } from "./useFetch";
import axios from "axios";
import { useState } from "react";

export function useFetchFilmDetails(id: string) {
  const { data: film } = useFatch<MovieDetailType>(BASE_URL + id);

  const characters = film?.characters.map((url) => {
    axios.get(url).then((response) => response.data);
  });

  return { characters };
}
