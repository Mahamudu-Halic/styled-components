import Link from "next/link";
import styled from "styled-components";

export const FormTitle = styled.h2`
  text-align: center;
  text-transform: capitalize;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin: 20px;
  padding: 1.5rem;
  border: 1px solid #000;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  background: #1ca34d;
  border: none; 
  border-radius: 4px;
`;

export const FormErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

export const FormPrompt = styled.p`
  color: #333;
  font-size: 13px;

`

export const FormLink = styled(Link)`
  color: #1ca34d;
  text-decoration: underline;
`

export const FormForgotPasswordContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
font-size: 13px;
`