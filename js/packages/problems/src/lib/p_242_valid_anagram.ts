export function isAnagram(s: string, t: string): boolean {

    // get the length of both words
    const wordLength1 = s.length;
    const wordLength2 = t.length;

    // if the length of the two words does not match then they
    // can't be anagrams
    if (wordLength1 !== wordLength2) return false;

    const letterRepo: string[] = []

    // Convert the word strings into letter arrays
    const wordArray1 = s.split("")
    const wordArray2 = s.split("")


    for (let i = 0; i < wordLength1; i++) {
        const currentLetter = wordArray1[0]
        const containsLetter = wordArray2.includes(currentLetter)
        if (containsLetter) {
            wordArray1.splice(0, 1)
            // Index of the letter in the second array
            const letterIndex = wordArray2.indexOf(currentLetter)
            wordArray2.splice(letterIndex, 1)
        }

        else return false
    }

    return true
}