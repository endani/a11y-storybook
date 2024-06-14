import styled from "styled-components"

export const ListWrapper = styled.ul<{ maxResults?: number }>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  align-items: center;
  width: 100%;
  overflow-y: auto;
  max-height: ${({ maxResults }) =>
    maxResults ? `${maxResults * 50}px` : "auto"};
`

export const Option = styled.li`
  align-items: center;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 0;
  height: 40px;
  padding: 0 16px;
  width: 95%;

  mark {
    background: #99c7fb;
    border-radius: 4px;
    color: #000000;
    font-weight: 600;
    padding: 0 2px;
  }

  &:focus {
    outline: none;
    border: 1px solid #27272a;
  }
`
