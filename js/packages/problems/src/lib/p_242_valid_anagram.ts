export function isAnagram(s: string, t: string): boolean {

    // get the length of both words
    const wordLength1 = s.length;
    const wordLength2 = t.length;

    // if the length of the two words does not match then they
    // can't be anagrams
    if (wordLength1 !== wordLength2) return false;

    const wordSorted1 = s.split("").sort()
    const wordSorted2 = t.split("").sort();

    for (let i = 0; i < wordLength1; i++) {
        if (wordSorted1[i] !== wordSorted2[i]) {
            return false
        }
    }

    return true
}