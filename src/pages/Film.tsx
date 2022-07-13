import { useParams } from "react-router-dom";
import useFetchFilmDetail from "../hooks/useFetchFilmDetail";
import FilmSinglePageCard from "../components/FilmSinglePageCard";
import Loader from "../components/Loader";
import Page from "../components/Page";

function Film() {
  const { id } = useParams<{ id: string }>();
  const { data: film, isFeching } = useFetchFilmDetail(Number(id));

  return (
    <Page>{isFeching ? <Loader /> : <FilmSinglePageCard {...film} />}</Page>
  );
}

export default Film;
