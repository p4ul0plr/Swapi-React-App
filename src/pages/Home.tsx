import { Fragment } from "react";
import { Grid } from "../components/Grid";
import useFetchFilmList from "../hooks/useFetchFilmList";
import FilmCard from "../components/FilmCard";
import Loader from "../components/Loader";
import Page from "../components/Page";

function Home() {
  const { data: films, isFeching } = useFetchFilmList();

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
