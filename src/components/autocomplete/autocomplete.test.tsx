import { render, screen } from "@testing-library/react"

import { Autocomplete } from "./autocomplete"
import { AutocompleteProps } from "./autocomplete.types"

const mockOnChange = jest.fn()

const renderAutocomplete = ({ placeholder, ...props }: AutocompleteProps) =>
  render(
    <Autocomplete
      {...props}
      placeholder={placeholder}
      onChange={mockOnChange}
    />
  )

describe("Autocomplete", () => {
  it("should render a Autocomplete correctly", () => {
    const { container } = renderAutocomplete({
      placeholder: "Awesome Autocomplete",
    } as AutocompleteProps)

    expect(container).toMatchSnapshot()
    expect(screen.getByTestId("autocomplete")).toBeInTheDocument()
  })

  it("should not show the error message by default", () => {
    renderAutocomplete({
      placeholder: "Awesome Autocomplete",
    } as AutocompleteProps)

    expect(screen.queryByTestId("error-message")).not.toBeInTheDocument()
  })

  it("should show the error message when hasError is true", async () => {
    renderAutocomplete({
      placeholder: "Awesome Autocomplete",
      hasError: true,
    } as AutocompleteProps)

    expect(screen.queryByTestId("error-message")).toBeInTheDocument()
    expect(
      screen.getByText("Ops! Something went wrong. Try again")
    ).toBeInTheDocument()
  })

  it("should show the loading message when isLoading is true", async () => {
    renderAutocomplete({
      placeholder: "Awesome Autocomplete",
      isLoading: true,
    } as AutocompleteProps)

    expect(screen.queryByTestId("error-message")).toBeInTheDocument()
    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })
})
