import { Fragment } from "react";
import styled from "styled-components";
import { colors } from "../../styles/themes/colors";
import { sizes } from "../../styles/themes/sizes";
import Padding from "../Padding";
import Text from "../Text";

const Card = styled.div`
  border: 1px solid ${colors.BORDER};
  background-color: ${colors.SECONDARY};
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: ${sizes.LG};
  line-height: ${sizes.LG};
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${colors.TITLE_1};
`;

export const Content = styled.ul`
  display: grid;
  @media (max-width: 575px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const ListItem = styled.li`
  list-style-type: none;

  &::before {
    content: "•";
    color: ${colors.TITLE_2};
    font-weight: bold;
    float: left;
    margin-right: 5px;
  }
`;

interface InfoProps {
  $title: string;
  $content: string[];
}

function Info({ $title, $content }: InfoProps) {
  if ($content?.length) {
    return (
      <Fragment>
        <Card>
          <Padding $y="10px" $x="20px">
            <Title>{$title}</Title>
          </Padding>
        </Card>
        <Card>
          <Padding $all="20px">
            <Content>
              {$content?.map((item, index) => {
                return (
                  <ListItem key={index}>
                    <Text $size={sizes.SM} $color={colors.TEXT}>
                      {item}
                    </Text>
                  </ListItem>
                );
              })}
            </Content>
          </Padding>
        </Card>
      </Fragment>
    );
  }
  return null;
}

export default Info;
