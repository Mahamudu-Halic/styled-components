"use client"
import React from "react";
import InputField from "../input-field/input-field.component";
import {
  FormButton,
  FormContainer,
  FormForgotPasswordContainer,
  FormLink,
  FormPrompt,
  FormTitle,
} from "./form.styled.component";
import { FormFieldProps } from "@/types/propTypes";

const FormField = ({ title, buttonLabel, createAccount }: FormFieldProps) => {
  return (
    <FormContainer>
      <FormTitle>{title}</FormTitle>
      <InputField label="username" />
      {createAccount && <InputField label="email" type="email" />}
      <InputField label="password" type="password" />
      {!createAccount && <FormForgotPasswordContainer><FormLink href={"#"}>Forgot password?</FormLink></FormForgotPasswordContainer>}
      {createAccount && (
        <InputField label="confirm password" type="password" />
      )}

      <FormButton>{buttonLabel}</FormButton>

     {createAccount ?
      <FormPrompt>
        Are you new here? <FormLink href="#">Create account</FormLink>
      </FormPrompt>
      :
      <FormPrompt>
        Already have an account? <FormLink href="#">Login</FormLink>
      </FormPrompt>
      }
    </FormContainer>
  );
};

export default FormField;
