import styled from "styled-components"

const CheckboxWrapper = styled.input`
  appearance: none;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid #000;
  box-sizing: border-box;
  display: inline-block;
  height: 20px;
  padding: 0;
  transition: outline 0.1s;
  vertical-align: bottom;
  width: 20px;

  &:checked {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'><rect width='256' height='256' fill='none'></rect><polyline points='216 72.005 104 184 48 128.005' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'></polyline></svg>");
    padding: 2px;
  }

  &:focus-visible {
    outline: 2px solid #3b19bf;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export { CheckboxWrapper }
