export const generateMarkedText = (text: string, searchText: string) => {
  const regex = new RegExp(searchText, "gi")
  const markedText = text.replace(regex, "<mark>$&</mark>")

  return markedText
}
