import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"

import { List } from "./list"
import { ListProps } from "./list.types"

const mockOnSelect = jest.fn()

const renderList = ({ options }: ListProps) =>
  render(<List options={options} onSelect={mockOnSelect} />)

describe("List", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should render a List correctly", () => {
    const { container } = renderList({
      options: ["Option 1", "Option 2", "Option 3"],
    })

    expect(container).toMatchSnapshot()
    expect(screen.getByTestId("list")).toBeInTheDocument()
  })

  it("should call onSelect when an option is clicked", async () => {
    renderList({
      options: ["Apple", "Banana", "Orange"],
    })

    const option = screen.getByText("Apple")

    await userEvent.click(option)

    expect(mockOnSelect).toHaveBeenCalled()
    expect(mockOnSelect).toHaveBeenCalledTimes(1)
  })
})
