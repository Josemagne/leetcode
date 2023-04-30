import { groupAnagrams } from './p_49_group_anagram';
describe("groupAnagrams()", () => {
    test("", () => {
        const result = groupAnagrams(["eat", "tea", "ate"])

        expect(result).toEqual([["eat", "tea", "ate"]])
    })

    test("", () => {
        const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])

        expect(result).toEqual([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]])
    })
})