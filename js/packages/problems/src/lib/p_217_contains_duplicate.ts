export function containsDuplicate(nums: number[]): boolean {
    const cache_memory: number[] = []
    const arrayLength = nums.length

    for (let i = 0; i < arrayLength; i++) {
        if (cache_memory.includes(nums[i])) {
            return true
        }
        else {
            cache_memory.push(nums[i])
        }
    }

    return false;
}