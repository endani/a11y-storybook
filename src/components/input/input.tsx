import { debounce } from "lodash"
import { InputWrapper } from "./input.styled"
import { InputProps } from "./input.types"

const INPUT_DEBOUNCE_TIME = 100

const Input = ({ onChange, inputRef, ...props }: InputProps) => {
  return (
    <InputWrapper
      ref={inputRef}
      data-qa="input"
      onChange={onChange && debounce(onChange, INPUT_DEBOUNCE_TIME)}
      {...props}
    />
  )
}

export { Input }
