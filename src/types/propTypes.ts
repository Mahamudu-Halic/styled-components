import React from "react";

export interface InputFieldProps {
  label: string;
  type?: string;
  icon?: React.ReactNode;
}

export interface FormFieldProps {
  title: String;
  buttonLabel: String;
  createAccount?: Boolean;
}

export interface ButtonProps {
  title: String;
  variant?: String;
}
