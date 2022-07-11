import { Fragment, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BASE_URL } from "../api";
import MyContext from "../contexts/MyContext";
import { useFatch } from "../hooks/useFetch";
import { useFatchFilmList } from "../hooks/useFetchFilmList";
import { FilmsResponse, MovieDataType } from "../interfaces/api";

function Home() {
  const { films, isFeching } = useFatchFilmList();

  return (
    <Fragment>
      {isFeching && <p>Carregando...</p>}
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
