import { useFatchFilmList } from "../hooks/useFetchFilmList";
import { Fragment } from "react";
import { Body } from "../components/Body";
import { Grid } from "../components/Grid";
import FilmCard from "../components/FilmCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Container } from "../components/Container";

function Home() {
  const { films, isFeching } = useFatchFilmList();

  return (
    <Fragment>
      <Header />
      <Body>
        {isFeching && <Loader />}
        <Container>
          <Grid>
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
          </Grid>
        </Container>
      </Body>
      <Footer />
    </Fragment>
  );
}

export default Home;
