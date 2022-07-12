import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FILM_MOCK_DATA } from "../constants";

function Film() {
  const { id } = useParams<{ id: string }>();

  return (
    <Fragment>
      <Header />
      <Body>
        <h1>{id}</h1>
      </Body>
      <Footer />
    </Fragment>
  );
}

export default Film;
