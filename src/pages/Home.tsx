import { Fragment, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useFatchFilmList } from "../hooks/useFetchFilmList";

function Home() {
  const { films, isFeching } = useFatchFilmList();

  return (
    <Fragment>
      <Header />
      {isFeching && <Loader />}
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
      <Footer />
    </Fragment>
  );
}

export default Home;
