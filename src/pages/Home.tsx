import { useFatchFilmList } from "../hooks/useFetchFilmList";
import { Fragment } from "react";
import Body from "../components/Body";
import { Grid } from "../components/Grid";
import FilmCard from "../components/FilmCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Container } from "../components/Container";
import Page from "../components/Page";

function Home() {
  const { films, isFeching } = useFatchFilmList();

  return (
    <Fragment>
      <Page>
        {isFeching ? (
          <Loader />
        ) : (
          <ul>
            <Grid>
              {films?.map((film, index) => {
                return (
                  <li key={index}>
                    <FilmCard
                      $id={film.id}
                      $description={film.description}
                      $title={film.title}
                    />
                  </li>
                );
              })}
            </Grid>
          </ul>
        )}
      </Page>
    </Fragment>
  );
}

export default Home;
