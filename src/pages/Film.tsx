import { useParams } from "react-router-dom";
import { BASE_URL } from "../api";
import { useFatch } from "../hooks/useFetch";
import { FilmResponse, MovieDetailType } from "../interfaces/api";

function Film() {
  const { id } = useParams<{ id: string }>();
  const { data: film } = useFatch<MovieDetailType>(BASE_URL + id);

  return (
    <ul>
      <li>
        <span>{film?.title}</span>
      </li>
      {/* <li>
        <span>{film?.release_date}</span>
      </li> */}
      <li>
        <p>{film?.description}</p>
      </li>
      <li>
        <p>{film?.director}</p>
      </li>
      <li>
        <p>{film?.producer}</p>
      </li>
      <li>
        <p>{film?.characters}</p>
      </li>
    </ul>
  );
}

export default Film;
