/**
 * Creates Pascal's triangle
 * @param numRows Number of rows to be returned
 * @returns Specified amount of rows in the Pascal triangle
 */
export default function generate(numRows: number): number[][] {
    /**
     * The first rows are always the same
     */
    let result: number[][] = [[1], [1, 1]];

    if (numRows == 1) return [[1]];
    else if (numRows == 2) return [[1], [1, 1]];

    for (let i = 1; i < numRows - 1; i++) {
        let newRow = generateRow(result[i])
        result.push(newRow);
    }

    return result;
}


/**
 * Generates the new row
 * @param currentRow The last row
 * @returns new Row
 */
export function generateRow(currentRow: number[]): number[] {
    /**
     * Every row starts with 1 and ends with 1
     */
    let result: number[] = [1];

    for (let i = 0; i < currentRow.length - 1; i++) {
        let nextNum = currentRow[i] + currentRow[i + 1];
        result.push(nextNum);
    }

    result.push(1);

    return result;
}
