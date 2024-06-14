import type { Meta, StoryObj } from "@storybook/react"
import { Autocomplete } from "./autocomplete"
import { fn } from "@storybook/test"

const mockResult = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
]

const meta = {
  title: "Example/AutoComplete",
  component: Autocomplete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    placeholder: "Search for a fruit",
    onChange: fn(),
    onResultSelect: fn(),
  },
} satisfies Meta<typeof Autocomplete>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export const WithError: Story = {
  args: {
    hasError: true,
  },
}

export const WithLoading: Story = {
  args: {
    isLoading: true,
  },
}

export const WithSelectedValue: Story = {
  args: {
    selectedValue: "Apple",
  },
}

export const WithResults: Story = {
  args: {
    options: mockResult,
  },
}
