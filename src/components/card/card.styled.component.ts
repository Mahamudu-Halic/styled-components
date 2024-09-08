import Image from "next/image";
import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  padding: 1rem 0.5rem;
  border: 1px solid #000;
  border-radius: 10px;
  gap: 1rem;
`;

export const CardTitle = styled.h3``;

export const CardDescription = styled.p``;

export const CardImageContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;

export const CardImage = styled(Image).attrs(() => ({
  fill: true,
}))`
  object-fit: cover;
  border-radius: 10px;
  object-position: center;
`;
