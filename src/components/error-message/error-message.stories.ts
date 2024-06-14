import type { Meta, StoryObj } from "@storybook/react"
import { ErrorMessage } from "./error-message"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { children: "Ops! Something went wrong. Try again" },
} satisfies Meta<typeof ErrorMessage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export const WithColor: Story = {
  args: {
    color: "red",
  },
}
