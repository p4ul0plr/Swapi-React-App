import { Column } from "./Column";
import { colors } from "../styles/themes/colors";
import { sizes } from "../styles/themes/sizes";
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

interface FilmCardProps {
  $id: number;
  $title: string;
  $description: string;
}

const getFilmCover = (id: number) => {
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

const Image = styled.div<ImageProps>`
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: inherit;
  height: 100%;
`;

const FilmCardStyle = styled.div`
  background-color: ${colors.SECONDARY};
  border: 1px solid ${colors.BORDER};
`;

const ImagaCardStyle = styled.div`
  border-right: 1px solid ${colors.TITLE_1};
  width: inherit;
  height: 100%;
`;

const ContentCardStyle = styled.div`
  @media (max-width: 575px) {
    padding: 5px;
  }

  @media (min-width: 576px) {
    padding: 10px;
  }

  @media (min-width: 768px) {
    padding: 10px;
  }

  @media (min-width: 992px) {
    padding: 20px;
  }

  @media (min-width: 1200px) {
    padding: 20px;
  }
`;

const TitleCardStyle = styled.h3`
  font-weight: bold;
  font-size: ${sizes.XL2};
  line-height: ${sizes.MD};
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${colors.TITLE_2};
  margin-bottom: 10px;
`;

const DescriptionCardStyle = styled.p`
  font-size: ${sizes.XS};
  line-height: ${sizes.MD};
  color: ${colors.TEXT};
  margin-bottom: 10px;
`;

const LinkCardStyle = styled(Link)`
  font-size: ${sizes.XS};
  line-height: ${sizes.MD};
  letter-spacing: 1px;
  font-weight: normal;
  text-transform: uppercase;
  color: ${colors.TITLE_1};
  text-decoration: none;
  float: right;

  &:hover {
    font-weight: bold;
    text-decoration: underline;
  }
`;

function FilmCard({ $id, $title, $description }: FilmCardProps) {
  return (
    <FilmCardStyle>
      <Row>
        <Row $maxWidth="30%">
          <ImagaCardStyle>
            <Image $backgroundImage={getFilmCover($id)} />
          </ImagaCardStyle>
        </Row>
        <Row $maxWidth="70%">
          <Column>
            <ContentCardStyle>
              <TitleCardStyle>{$title}</TitleCardStyle>
              <DescriptionCardStyle>{$description}</DescriptionCardStyle>
              <LinkCardStyle to={`/films/${$id}`}>VER MAIS</LinkCardStyle>
            </ContentCardStyle>
          </Column>
        </Row>
      </Row>
    </FilmCardStyle>
  );
}

export default FilmCard;
