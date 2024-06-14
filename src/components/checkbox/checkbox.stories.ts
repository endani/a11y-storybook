import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { Checkbox } from "./checkbox"

const meta = {
  title: "Example/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Button",
  },
}
