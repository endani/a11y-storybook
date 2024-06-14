import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { Button } from "./button"

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Button",
  },
}

export const Secondary: Story = {
  args: {
    label: "Button",
    variant: "secondary",
  },
}

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
}

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Button",
  },
}

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
}

export const CustomColor: Story = {
  args: {
    label: "Button",
    backgroundColor: "red",
  },
}
