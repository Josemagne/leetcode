import { twoSum } from './p_1_two_sum';
describe("twoSum", () => {
    test("[1, 2, 3] should return [1,2]", () => {
        const result = twoSum([1, 2, 3], 5)

        expect(result).toEqual([1, 2])
    })

    test("", () => {
        const result = twoSum([423, 4567, 2345, 4, 7], 11)

        expect(result).toEqual([3, 4])
    })
})