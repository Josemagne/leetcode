import { groupAnagrams } from './p_49_group_anagram';
describe("groupAnagrams()", () => {
    test("", () => {
        const result = groupAnagrams(["eat", "tea", "ate"])

        expect(result).toEqual([["eat", "tea", "ate"]])
    })
})