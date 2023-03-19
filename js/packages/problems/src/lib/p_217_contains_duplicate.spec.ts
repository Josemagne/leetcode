import { containsDuplicate } from "./p_217_contains_duplicate"

describe("p_217_contains_duplicate", () => {
    test("[1,2,1]", () => {
        expect(containsDuplicate([1, 2, 1])).toBe(true)
    })

    test("[1,2,3]", () => {
        expect(containsDuplicate([1, 2, 3])).toBe(false)
    })
})