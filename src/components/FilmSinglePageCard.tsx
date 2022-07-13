import { MovieDetailType } from "../api/interfaces";
import { BackgroundImage } from "./BackgroundImage";
import { colors } from "../styles/themes/colors";
import { Column } from "./Column";
import { sizes } from "../styles/themes/sizes";
import { Row } from "./Row";
import styled from "styled-components";
import Margin from "./Margin";
import Info from "./Film/Info";
import Text from "./Text";
import epi1 from "../assets/images/covers/epi1.jpeg";
import epi2 from "../assets/images/covers/epi2.jpeg";
import epi3 from "../assets/images/covers/epi3.jpeg";
import epi4 from "../assets/images/covers/epi4.jpeg";
import epi5 from "../assets/images/covers/epi5.jpeg";
import epi6 from "../assets/images/covers/epi6.jpeg";

const getFilmCover = (id: number | null) => {
  switch (id) {
    case 1:
      return epi4;
    case 2:
      return epi5;
    case 3:
      return epi6;
    case 4:
      return epi1;
    case 5:
      return epi2;
    case 6:
      return epi3;
  }
};

interface TitleProps {
  $size: string;
  $color: string;
  $center?: boolean;
}
const Title = styled.h1<TitleProps>`
  font-size: ${({ $size }) => $size};
  color: ${({ $color }) => $color};
  text-align: ${({ $center }) => ($center ? "center" : "inherit")};
  width: 100%;
  text-transform: uppercase;
`;

const Details = styled.div`
  @media (max-width: 575px) {
    padding: 5px;
  }

  @media (min-width: 576px) {
    padding: 20px 10px 50px 10px;
  }

  @media (min-width: 768px) {
    padding: 30px 10px 75px 10px;
  }

  @media (min-width: 992px) {
    padding: 50px 20px 150px 20px;
  }

  @media (min-width: 1200px) {
    padding: 50px 40px 200px 40px;
  }
`;

const Cover = styled.div`
  border-width: 1px 1px 0 1px;
  border-style: solid;
  border-color: ${colors.BORDER};
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  border: 1px solid ${colors.BORDER};
  background-color: ${colors.SECONDARY};
`;

function FilmSinglePageCard(props: MovieDetailType) {
  return (
    <Column>
      <Card>
        <Row>
          <Column $maxWidth="40%">
            <Cover>
              <BackgroundImage $backgroundImage={getFilmCover(props.id)} />
            </Cover>
          </Column>
          <Column $maxWidth="60%">
            <Details>
              <Title $size={sizes.XL3} $color={colors.TITLE_1}>
                {props.title}
              </Title>
              <Margin $top="5px">
                <Text $size={sizes.SM} $color={colors.TEXT}>
                  {props.releaseDate}
                </Text>
              </Margin>
              <Margin $top="30px">
                <Text $size={sizes.MD} $color={colors.WHITE}>
                  {props.description}
                </Text>
              </Margin>
              <Margin $top="30px">
                <Text $size={sizes.MD} $color={colors.TEXT}>
                  Director: {props.director}
                </Text>
              </Margin>
              <Text $size={sizes.MD} $color={colors.TEXT}>
                Producer: {props.producer}
              </Text>
            </Details>
          </Column>
        </Row>
      </Card>
      <Info $title="Characteres" $content={props.characters} />
      <Info $title="Planets" $content={props.planets} />
      <Info $title="Starships" $content={props.starships} />
      <Info $title="Vehicles" $content={props.vehicles} />
      <Info $title="Species" $content={props.species} />
    </Column>
  );
}

export default FilmSinglePageCard;
