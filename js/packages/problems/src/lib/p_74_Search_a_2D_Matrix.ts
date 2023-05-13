export function searchMatrix(matrix: number[][], target: number): boolean {
    let leftRow = 0;
    let rightRow = Math.floor(matrix.length / 2)

    let leftPointer = 0
    let rightPointer: number

    let selectionIsBigger = true
    const found = false

    while (leftRow !== rightRow && found === false) {
        const currentRow = matrix[rightRow]
        rightPointer = Math.floor(currentRow.length / 2)

        // Search in the row
        while (leftPointer !== rightPointer) {
            const selection = currentRow[rightPointer]

            if (selection > target) {
                rightPointer = Math.floor(rightPointer / 2)
                selectionIsBigger = true
            }

            else if (selection < target) {
                rightPointer = rightPointer + Math.floor(rightPointer / 2)
                leftPointer = rightPointer
                selectionIsBigger = false
            }

            else {
                return true
            }
        }

        if (selectionIsBigger) {
            rightRow = Math.floor(rightRow / 2)
        }

        if (!selectionIsBigger) {
            rightRow = rightRow + Math.floor(rightRow / 2)
            leftRow = rightRow
        }

    }

    return false

}