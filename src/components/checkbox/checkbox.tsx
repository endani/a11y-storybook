import { CheckboxWrapper } from "./checkbox.styled"

const Checkbox = () => {
  return (
    <>
      <CheckboxWrapper
        aria-label="checkbox"
        title="checkbox"
        role="checkbox"
        type="checkbox"
        name="checkbox[]"
        value="native"
        id="custom"
      />
    </>
  )
}

export { Checkbox }
