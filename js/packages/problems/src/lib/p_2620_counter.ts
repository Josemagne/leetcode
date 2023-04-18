export const createCounter = (n: number) => {

    /**
     * Saves how often the function was called
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
    let memory = 0

    memory++

    /**
     * The iterator variable increments to the amount of 'memory'
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
    let iterator = 0

    /**
     * The array with the result
     */
    const arrayResult: number[] = []

    // NOTE anonymous function (no name)
    return function () {
        for (let i = 0; i < memory + 1; i++) {
            arrayResult.push(n + iterator)
            iterator++
        }
        return arrayResult
    }
}