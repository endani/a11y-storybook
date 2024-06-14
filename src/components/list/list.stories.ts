import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { List } from "./list"

const mockOptions = [
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
  title: "Example/List",
  component: List,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onSelect: fn(), options: mockOptions },
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export const MaxResults: Story = {
  args: {
    maxResults: 5,
  },
}

export const SearchTerm: Story = {
  args: {
    searchTerm: "App",
  },
}
