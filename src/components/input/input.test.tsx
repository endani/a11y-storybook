import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Input } from "./input"
import { InputProps } from "./input.types"

const mockOnChange = jest.fn()

jest.mock("lodash", () => ({
  debounce: (fn: any) => fn,
}))

const renderInput = ({ placeholder, type, ...props }: InputProps) =>
  render(
    <Input
      {...props}
      placeholder={placeholder}
      type={type}
      onChange={mockOnChange}
    />
  )

describe("Input", () => {
  it("should render a Input correctly", () => {
    const { container } = renderInput({
      placeholder: "Awesome Input",
      type: "text",
    })

    expect(container).toMatchSnapshot()
    expect(screen.getByTestId("input")).toBeInTheDocument()
  })

  it("should render a search Input correctly", () => {
    renderInput({
      placeholder: "Awesome Input",
      type: "search",
    })

    expect(screen.getByTestId("input")).toHaveAttribute("type", "search")
  })

  it("should render a Input with a custom placeholder", () => {
    renderInput({
      placeholder: "Nice Input",
      type: "text",
    })

    expect(screen.getByTestId("input")).toHaveAttribute(
      "placeholder",
      "Nice Input"
    )
  })

  it("should call onChange when the input value changes", async () => {
    renderInput({
      placeholder: "Awesome Input",
      type: "text",
    })

    const input = screen.getByTestId("input")

    await userEvent.type(input, "New Value")

    expect(mockOnChange).toBeCalled()

    expect(mockOnChange).toBeCalledTimes(9)
  })
})
