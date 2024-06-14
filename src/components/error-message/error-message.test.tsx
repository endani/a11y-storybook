import { render, screen } from "@testing-library/react"
import { ErrorMessage } from "./error-message"
import { ErrorMessageProps } from "./error-message.types"

const renderErrorMessage = ({ children, color }: ErrorMessageProps) =>
  render(<ErrorMessage color={color}>{children}</ErrorMessage>)

describe("ErrorMessage", () => {
  it("should render a ErrorMessage correctly", () => {
    const { container } = renderErrorMessage({
      children: "Awesome ErrorMessage",
    })

    expect(container).toMatchSnapshot()
    expect(screen.getByTestId("error-message")).toBeInTheDocument()
  })

  it("should render a ErrorMessage with custom color", () => {
    renderErrorMessage({
      children: "Awesome ErrorMessage",
      color: "#000",
    })

    expect(screen.getByTestId("error-message")).toHaveStyle("color: #000")
  })
})
