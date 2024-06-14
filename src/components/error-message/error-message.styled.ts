import styled from "styled-components"
import { ErrorMessageProps } from "./error-message.types"

export const ErrorMessageWrapper = styled.p<ErrorMessageProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;

  color: ${({ color }) => (color ? color : "#000")};
`
