import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./carousel.styled.component";
import Card from "../card/card.component";

type Props = {};

const CarouselComponent = (props: Props) => {
  return (
    <Carousel>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselComponent;
