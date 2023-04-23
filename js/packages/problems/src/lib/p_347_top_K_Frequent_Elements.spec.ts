import { topKFrequent } from './p_347_top_K_Frequent_Elements';
describe("Top K Frequent Elements", () => {
    test("", () => {
        const result = topKFrequent([1, 1, 1, 2, 2, 3], 2)

        expect(result).toEqual([1, 2])
    })

    test("", () => {
        const result = topKFrequent([33, 33, 33, 33, 11, 11, 11, 3, 3, 3, 4, 4], 3)

        expect([33, 11, 3])
    })
})