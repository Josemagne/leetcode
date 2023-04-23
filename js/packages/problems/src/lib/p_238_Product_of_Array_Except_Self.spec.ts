import { productExceptSelf } from './p_238_Product_of_Array_Except_Self';
describe("Product of Array Except Self", () => {
    test("", () => {
        const result = productExceptSelf([1, 2, 3, 4])

        expect(result).toEqual([24, 12, 8, 6])
    })

    test("", () => {
        const result = productExceptSelf([-1, 1, 0, -3, 3])

        expect(result).toEqual([0, 0, 9, 0, 0])
    })
})