import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Body from "../components/Body";
import FilmSinglePageCard from "../components/FilmSinglePageCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Page from "../components/Page";
import Text from "../components/Text";
import { FILM_MOCK_DATA } from "../constants";
import { colors } from "../styles/themes/colors";
import { sizes } from "../styles/themes/sizes";

function Film() {
  const { id } = useParams<{ id: string }>();

  return (
    <Page>
      <FilmSinglePageCard {...FILM_MOCK_DATA} />
    </Page>
  );
}

export default Film;
