import { isAnagram } from "./p_242_valid_anagram";

export function groupAnagrams(strs: string[]): string[][] {

    if (strs.length === 1) return [[strs[0]]]

    const anagramGroups: string[][] = []
    const anagramLengths: string[] = []

    // START collect the words with the same length temporarily in the same array
    const tempArrays: { [length: string]: string[] } = {}

    for (let i = 1; i < 101; i++) {
        tempArrays[i.toString()] = []
    }

    for (let i = 0; i < strs.length; i++) {
        if (!anagramLengths.includes(strs[i].length.toString())) {
            anagramLengths.push(strs[i].length.toString())
        }
        tempArrays[strs[i].length.toString()].push(strs[i])
    }
    // END collect the words with the same length temporarily in the same array

    for (let i = 0; i < anagramLengths.length; i++) {
        const newGroup: string[] = []
        for (let j = 0; j < tempArrays[anagramLengths[i]].length - 1; j++) {
            for (let h = j + 1; h < tempArrays[anagramLengths[i]].length; h++) {
                const currentFirstWord = tempArrays[anagramLengths[i]][j]
                const currentSecondWord = tempArrays[anagramLengths[i]][h]
                if (isAnagram(currentFirstWord, currentSecondWord)) {
                    newGroup.push(currentFirstWord)
                    newGroup.push(currentSecondWord)
                }
            }
            anagramGroups.push(newGroup)
        }
    }

    return anagramGroups
}
