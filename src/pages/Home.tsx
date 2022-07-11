import { Fragment, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BASE_URL } from "../api";
import MyContext from "../contexts/MyContext";
import { useFatch } from "../hooks/useFetch";
import { useFatchFilmList } from "../hooks/useFetchFilmList";
import { FilmsResponse, MovieDataType } from "../interfaces/api";

function Home() {
  // const { data: films } = useFatch<FilmsResponse>(BASE_URL);
  const { data: films } = useFatchFilmList();

  const getIdFromUrl = (url: string) => {
    return url.split("/").filter(Boolean).pop();
  };

  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <NavLink to="/login">LOGOUT</NavLink>
          </li>
        </ul>
      </nav>
      <ul>
        {films?.map((film) => {
          return (
            <li key={film.id}>
              <Link to={`/films/${film.id}`}>{film.title}</Link>
              <p>{film.description}</p>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default Home;
