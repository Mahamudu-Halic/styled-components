import styled from "styled-components";

export const Button = styled.button<{ variant?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  background: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return `
              background: #0c73f5;
            `;
      case "secondary":
        return `
              background: #7828c8;
            `;
      case "success":
        return `
              background: #16c965;
            `;
      case "premium":
        return `
              background: linear-gradient(to right, red, blue);
            `;
      case "destructive":
        return `
              background: #ff0000;
            `;
      case "disabled":
        return `
              background: #373941;
            `;
      default:
        return `
              background: none;
              border: solid 1px #000;
              color: #000;
            `;
    }
  }}
`;
