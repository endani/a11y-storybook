import styled from "styled-components"
import { InputProps } from "./input.types"

export const InputWrapper = styled.input<InputProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: none;
  border: none;
  border-bottom: 1px solid #515151;
  color: #515151;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.0125em;
  line-height: 140%;
  outline: none;
  padding: 8px 2px;
  width: 100%;

  ::placeholder {
    color: #515151;
    opacity: 0.2;
  }
`
