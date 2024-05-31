export type ButtonVariant = "primary" | "secondary"
export type ButtonSize = "small" | "medium" | "large"

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: ButtonVariant
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: ButtonSize
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}
