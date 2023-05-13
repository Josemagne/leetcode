import { searchMatrix } from './p_74_Search_a_2D_Matrix';
describe("74. Seach a 2D Matrix", () => {
    test("1", () => {
        const result = searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)
        expect(result).toBe(true)
    })

    test("2", () => {
        const result = searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)

        expect(result).toBe(false)
    })

    test("3", () => {
        const result = searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 30)

        expect(result).toBe(true)
    })

    test("4", () => {
        const result = searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 7777)

        expect(result).toBe(false)
    })

    test("5", () => {
        const result = searchMatrix([[23, 30, 34, 60]], 34)

        expect(result).toBe(true)
    })
})