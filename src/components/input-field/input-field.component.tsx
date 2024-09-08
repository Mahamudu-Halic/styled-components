import { InputFieldProps } from '@/types/propTypes'
import React from 'react'
import { Input, InputFieldContainer, Label } from './input-field.styled.component'

const InputField = ({label, type}: InputFieldProps) => {
  return (
    <InputFieldContainer>
      <Input type={type} placeholder=''/>
      <Label>{label}</Label>
    </InputFieldContainer>
  )
}

export default InputField