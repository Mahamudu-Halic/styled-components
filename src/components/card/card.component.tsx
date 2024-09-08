"use client";
import {
  CardContainer,
  CardDescription,
  CardImage,
  CardImageContainer,
  CardTitle,
} from "./card.styled.component";
import { Button } from "../buttons/button.styled.component";

type Props = {};

const Card = (props: Props) => {
  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage
          src="/assets/halic.jpg"
          alt="image here"
        />
      </CardImageContainer>
      <CardTitle>title</CardTitle>
      <CardDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        rerum doloribus, distinctio in temporibus illum, recusandae nihil
        pariatur dolor cumque saepe minus tempore earum ullam corrupti, minima
        eligendi id quas.
      </CardDescription>
      <Button>read more</Button>
    </CardContainer>
  );
};

export default Card;
