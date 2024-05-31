import React from "react"
import { ButtonProps } from "./button.types"
import { ButtonWrapper } from "./button.styled"

const Button = ({
  variant = "primary",
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <ButtonWrapper
      type="button"
      variant={variant}
      size={size}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </ButtonWrapper>
  )
}

export { Button }
