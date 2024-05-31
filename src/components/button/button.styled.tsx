import styled from "styled-components"
import { ButtonSize, ButtonVariant } from "./button.types"

const ButtonWrapper = styled.button<{
  variant: ButtonVariant
  size: ButtonSize
}>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return `
          color: white;
          background-color: #1ea7fd;
        `
      case "secondary":
        return `
          color: #333;
          background-color: transparent;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        `
      default:
        return ""
    }
  }}

  ${({ size }) => {
    switch (size) {
      case "small":
        return `
          font-size: 12px;
          padding: 10px 16px;
        `
      case "medium":
        return `
          font-size: 14px;
          padding: 11px 20px;
        `
      case "large":
        return `
          font-size: 16px;
          padding: 12px 24px;
        `
      default:
        return ""
    }
  }}
`

export { ButtonWrapper }
