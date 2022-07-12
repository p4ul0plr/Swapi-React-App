import { Fragment, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import FilmCard from "../components/FilmCard";
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
      <ul>
        {films?.map((film) => {
          return (
            <li key={film.id}>
              <FilmCard
                $id={film.id}
                $descriptiom={film.description}
                $title={film.title}
              />
            </li>
          );
        })}
      </ul>
      <Footer />
    </Fragment>
  );
}

export default Home;
