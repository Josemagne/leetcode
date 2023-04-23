export function topKFrequent(nums: number[], k: number): number[] {
    /**
     * Records the frequency of the number in the 'nums' array
     */
    const numberRecording: { [number: string]: number } = {}

    /**
     * Gathers the most frequent numbers
     */
    const mostFrequentNumbers: number[] = []

    // Allocates the literal number to its frequency in 'numberRecording'
    for (let i = 0; i < nums.length; i++) {
        const currentElement = nums[i];

        // If it is a new number
        if (numberRecording[currentElement.toString()] === undefined) {
            numberRecording[currentElement.toString()] = 1
        }

        // Else increase the the frequency by one
        else {
            numberRecording[currentElement.toString()] = numberRecording[currentElement.toString()] + 1
        }
    }

    /**
     * Contains the frequencies of the 'k' numbers 
     */
    const frequencies = Object.values(numberRecording).sort((a, b) => {
        return b - a
    }).slice(0, k)

    for (const [key, value] of Object.entries(numberRecording)) {
        if (frequencies.includes(value)) {
            mostFrequentNumbers.push(Number(key))
        }
    }


    return mostFrequentNumbers
}