import styled from "styled-components";

export const InputFieldContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  border: solid 1px #dadce0;
  border-radius: 4px;
  outline: transparent;
  background: transparent;
  color: #000;
  font-size: 1rem;

  &:focus {
    border: solid 3px #1ca34d;
  }

  &:not(:placeholder-shown) + span,
  &:focus + span {
    transform: translate(20px, -25px);
    color: #1ca34d;
    background: #ededed;
    padding: 0 6px;
    font-size: 0.8rem;
    font-weight: 600;
  }

  &:not(:focus) + span {
    color: #808080;
  }
`;

export const Label = styled.span`
  position: absolute;
  left: 0;
  color: white;
  padding-left: 1.2rem;
  pointer-events: none;
  font-size: 1.2rem;
  color: #7f8fa6;
  transition: all 0.3s ease;
`;
