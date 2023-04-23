import { containsDuplicate } from './p_217_contains_duplicate';
export function isValidSudoku(board: string[][]): boolean {

    // iterate over the rows
    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        // Check the rows
        if (!uniqueRowColumn(row)) {
            return false
        }
    }

    // iterate over the columns
    for (let i = 0; i < board.length; i++) {
        // Gather the column
        const column = extractColumn(board, i)
        // check the column
        if (!uniqueRowColumn(column)) {
            return false
        }
    }

    // iterate over the squares
    for (let i = 1; i < 4; i++) {
        for (let j = 1; j < 4; j++) {
            // Ascertain the square
            const square = extractSquare(board, [i, j])
            // check the square
            if (!uniqueRowColumn(square)) {
                return false
            }
        }
    }
    return true
}

/**
 * Checks if the provided row or column contains only unique numbers
 * @param rowOrColumn 
 */
export function uniqueRowColumn(rowOrColumn: string[]): boolean {

    const filteredArray = rowOrColumn.filter((val) => val !== ".")

    const numberArrays = filteredArray.map((val) => Number(val))

    if (containsDuplicate(numberArrays)) {
        return false
    }

    return true

}

/**
 * 
 * @param board 
 * @param col
 */
export function extractColumn(board: string[][], col: number): string[] {

    const column: string[] = []
    for (let i = 0; i < board.length; i++) {
        const element = board[i];
        column.push(element[col - 1])
    }

    return column
}

/**
 * Extract a square from the board depending on the x,y position
 * @param board the board with the numbers
 * @param sqr The square in the board. First index is the x value and the second the y value. x is horizontal and y vertical positioning
 */
export function extractSquare(board: string[][], sqr: number[]): string[] {

    const MAPPING = {
        "1": [0, 1, 2],
        "2": [3, 4, 5],
        "3": [6, 7, 8]
    }

    /**
     * Contains the numbers of the square
     */
    let square: string[] = []

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const columnIndexes: number[] = MAPPING[sqr[0].toString()]

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const rowIndexes: number[] = MAPPING[sqr[1].toString()]

    for (let i = columnIndexes[0]; i <= columnIndexes[columnIndexes.length - 1]; i++) {
        const row = board[i].slice(rowIndexes[0], rowIndexes[rowIndexes.length - 1] + 1)

        square = square.concat(row)
    }

    square = square.filter((val) => val !== ".")

    return square

}