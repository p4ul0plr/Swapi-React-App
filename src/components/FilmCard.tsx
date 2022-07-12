import { Column } from "./Column";
import { Link } from "react-router-dom";
import { Row } from "./Row";
import styled from "styled-components";
import epi1 from "../assets/images/covers/epi1.jpeg";
import epi2 from "../assets/images/covers/epi2.jpeg";
import epi3 from "../assets/images/covers/epi3.jpeg";
import epi4 from "../assets/images/covers/epi4.jpeg";
import epi5 from "../assets/images/covers/epi5.jpeg";
import epi6 from "../assets/images/covers/epi6.jpeg";

interface ImageProps {
  $backgroundImage: string | undefined;
}

const Image = styled.div<ImageProps>`
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: inherit;
  height: 180px;
`;

interface FilmCardProps {
  $id: number;
  $title: string;
  $descriptiom: string;
}

const getFilmImage = (id: number) => {
  switch (id) {
    case 1:
      return epi1;
    case 2:
      return epi2;
    case 3:
      return epi3;
    case 4:
      return epi4;
    case 5:
      return epi5;
    case 6:
      return epi6;
  }
};

function FilmCard({ $id, $title, $descriptiom }: FilmCardProps) {
  return (
    <Row>
      <Row $maxWidth="30%">
        <Image $backgroundImage={getFilmImage($id)} />
      </Row>
      <Row $maxWidth="70%">
        <Column>
          <h3>{$title}</h3>
          <p>{$descriptiom}</p>
          <Link to={`/films/${$id}`}>VER MAIS</Link>
        </Column>
      </Row>
    </Row>
  );
}

export default FilmCard;
