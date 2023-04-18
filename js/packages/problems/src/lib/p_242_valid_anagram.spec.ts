import { isAnagram } from './p_242_valid_anagram';

describe("Valid anagram", () => {
    // It should return false because the length of the words is not the same
    test("'breake' and 'baker' should return false", () => {
        const result = isAnagram('breake', 'baker')

        expect(result).toBe(false)
    })

    test("'break' and 'baker' should be true", () => {
        const result = isAnagram('break', 'baker')

        expect(result).toBe(true)
    })

    test("'rat' and 'car' should return false", () => {
        const result = isAnagram('rat', 'car')

        expect(result).toBe(false)
    })

})