import { ChangeEvent, RefObject } from "react"

export interface InputProps {
  autoComplete?: string
  autoFocus?: boolean
  id?: string
  inputRef?: RefObject<HTMLInputElement>
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  role?: string
  tabIndex?: number
  type: string
  value?: string
}
