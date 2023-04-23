export function productExceptSelf(nums: number[]): number[] {
    const transformedArray: number[] = []

    for (let i = 0; i < nums.length; i++) {
        let fixedNumber = 1

        for (let j = 0; j < nums.length; j++) {
            // Skip the iteration
            if (i === j) {
                continue;
            }

            const currentNumber = nums[j];

            fixedNumber = fixedNumber * currentNumber

        }

        transformedArray.push(fixedNumber)
    }


    return transformedArray
}