

/**
 * Finds the longest string for any two pairs of strings
 * @param a string
 * @param b string
 */
export function longestString(a: string, b: string): string {
    if (a.length > b.length) return a;
    else if (a.length === b.length) return a;
    else return b;
}


/**
 * 
 * @param a first binary
 * @param b second binary
 * @returns Sum of binary numbers and carriage
 */
export function add(a: number, b: number): any[] | number[] {

    // Both are 0
    if (a == 0 && b == 0) return [0, null];

    // a and b are not 1 at the same time 
    if ((a === 1 || b === 1) && !(a === 1 && b === 1)) return [1, null]

    // a and b are both 1
    else return [1, 1]
}


export default function addBinary(a: string, b: string): string {
    let arrayRepresentation: string[] = [];

    let longest_string = longestString(a, b);
    let carriage = 0;
    for (let i = 0; i < longestString.length; i++) {
        let newNumber = add(parseInt(a[i]), parseInt(b[i]));

        arrayRepresentation.push(newNumber[0]);

        // If we have carriage
        if (newNumber[1]) 

    }

    return arrayRepresentation.join("");

}