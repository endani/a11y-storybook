export interface AutocompleteProps {
  autoFocus?: boolean
  hasError?: boolean
  isLoading?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onResultSelect: (option: string) => void
  options?: string[]
  placeholder: string
  searchTerm?: string | null
  selectedValue?: string | null
}
