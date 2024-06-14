import { useRef } from "react"
import { Input, ErrorMessage, List } from "../index"

import { AutocompleteWrapper } from "./autocomplete.styled"
import { AutocompleteProps } from "./autocomplete.types"

const Autocomplete = ({
  autoFocus = true,
  hasError = false,
  isLoading,
  onChange,
  onResultSelect,
  options,
  placeholder,
  searchTerm = "",
  selectedValue,
}: AutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleOnResultSelect = (option: string) => {
    inputRef.current!.value = option
    onResultSelect(option)
  }

  return (
    <div data-qa="autocomplete">
      <AutocompleteWrapper>
        <Input
          aria-autocomplete="list"
          aria-controls="autocomplete-list"
          aria-expanded={!!options?.length}
          autoComplete="off"
          autoFocus={autoFocus}
          inputRef={inputRef}
          onChange={onChange}
          placeholder={placeholder}
          role="combobox"
          tabIndex={0}
          type="search"
        />
        {!isLoading && !!options?.length && (
          <List
            id="autocomplete-list"
            options={options}
            onSelect={handleOnResultSelect}
            searchTerm={searchTerm}
            maxResults={5}
          />
        )}
      </AutocompleteWrapper>

      {isLoading && <ErrorMessage>Loading...</ErrorMessage>}
      {!isLoading && hasError && (
        <>
          <ErrorMessage>Ops! Something went wrong. Try again</ErrorMessage>
        </>
      )}
      {!isLoading && !hasError && searchTerm && options?.length === 0 && (
        <ErrorMessage>
          No results found for <b>{searchTerm}</b>. Will ask our chef to add it
          to the menu! 👩‍🍳
        </ErrorMessage>
      )}
      {selectedValue && (
        <ErrorMessage>
          You have selected <b>{selectedValue}</b> 🎉
        </ErrorMessage>
      )}
    </div>
  )
}

export { Autocomplete }
