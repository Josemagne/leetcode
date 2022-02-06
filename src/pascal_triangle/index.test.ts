import generate, { generateRow } from "./index";

beforeAll(() => {
    console.log("STARTING TESTS")
})

afterAll(() => {
    console.log("END OF TESTS")
})

const rows = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];

describe("generateRow()", () => {
    test('generateRow() generates the next row', () => {
        expect(generateRow(rows[2])).toEqual([1, 3, 3, 1]);
    });
})

describe("generate()", () => {
    test("generate(4)", () => {
        expect(generate(4)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]])
    })


    test("generate(5)", () => {
        expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]])
    })
})
