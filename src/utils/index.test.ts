import { generateMarkedText } from "./index"

describe("generateMarkedText", () => {
  it("should return a string with the search text marked", () => {
    const text = "This is an awesome text"
    const searchText = "awesome"
    const expected = "This is an <mark>awesome</mark> text"

    const result = generateMarkedText(text, searchText)

    expect(result).toEqual(expected)
  })
})
