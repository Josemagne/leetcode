export function containsDuplicate(nums: number[]): boolean {
    /**
     * Contains the individuel numbers that were found in the 'nums' array
     */
    const cache_memory: number[] = []

    /**
     * The length of the 'nums' array
     */
    const arrayLength = nums.length

    // START Iterate over the 'nums' array
    for (let i = 0; i < arrayLength; i++) {
        if (cache_memory.includes(nums[i])) {
            return true
        }
        else {
            cache_memory.push(nums[i])
        }
    }
    // END Iterate over the 'nums' array

    return false;
}