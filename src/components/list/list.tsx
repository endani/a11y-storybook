import { generateMarkedText } from "../../utils"
import { Option, ListWrapper } from "./list.styled"
import { ListProps } from "./list.types"

const List = (props: ListProps) => {
  const { options, id, searchTerm = "", onSelect, maxResults } = props

  const handleOnKeyDown = (event: React.KeyboardEvent) => {
    event.stopPropagation()

    const focusedElement = document.activeElement as HTMLElement
    const focusedElementValue = focusedElement.textContent

    if (event.key === "Enter" && focusedElementValue) {
      onSelect && onSelect(focusedElementValue)
    }
  }

  return (
    <ListWrapper
      id={id}
      data-qa="list"
      role="listbox"
      aria-label="Desert list"
      onKeyDown={handleOnKeyDown}
      maxResults={maxResults}
    >
      {options.map((option, index) => (
        <Option
          aria-posinset={index + 1}
          aria-setsize={options.length}
          tabIndex={0}
          role="option"
          key={index}
          value={option}
          onClick={() => onSelect && onSelect(option)}
          dangerouslySetInnerHTML={{
            __html: generateMarkedText(option, searchTerm as string),
          }}
        />
      ))}
    </ListWrapper>
  )
}

export { List }
