export function search(nums: number[], target: number): number {

    if (nums.length === 1) {
        if (nums[0] === target) return 0
        else return -1
    }

    let leftPointer = 0
    let rightPointer = Math.floor(nums.length / 2)

    while (leftPointer !== rightPointer) {
        if (nums[rightPointer] > target) {
            rightPointer = Math.floor(rightPointer / 2)
        }

        else if (nums[rightPointer] < target) {
            // The leftPointer takes over the position of 
            // the rightPointer
            leftPointer = rightPointer
            rightPointer = rightPointer + Math.floor(rightPointer / 2)
        }

        // We found the index of the target
        else return rightPointer
    }

    // We could not find the target
    return -1

}