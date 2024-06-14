import { ErrorMessageWrapper } from "./error-message.styled"
import { ErrorMessageProps } from "./error-message.types"

const ErrorMessage = ({ children, color }: ErrorMessageProps) => (
  <ErrorMessageWrapper data-qa="error-message" color={color}>
    {children}
  </ErrorMessageWrapper>
)

export { ErrorMessage }
