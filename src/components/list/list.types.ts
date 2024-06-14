export interface ListProps {
  options: string[]
  onSelect?: (option: string) => void
  tabIndex?: number
  id?: string
  searchTerm?: string | null
  maxResults?: number
}
