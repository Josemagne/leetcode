import { search } from './p_704_binary_search';
describe("704. Binary Search", () => {
    test("1", () => {
        const result = search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)

        expect(result).toBe(10)
    })

    test("2", () => {
        const result = search([-1, 0, 3, 5, 9, 12], 4)
    })

    test("3", () => {
        const result = search([-1, 0, 3, 5, 9, 12], -1)
    })
})