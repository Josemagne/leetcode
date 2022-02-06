import { longestString, add } from ".";

beforeAll(() => {
    console.log("=======================")
    console.log("=======================")
})

afterAll(() => {
    console.log("=======================")
    console.log("=======================")
})


// ANCHOR longestString()
describe("longestString()", () => {

    test("longestString('1','10')", () => {
        expect(longestString('1', '10')).toBe('10');
    })

    test("longestString('111','100')", () => {
        expect(longestString('111', '100')).toBe("111")
    })
})

// ANCHOR add()
describe("add()", () => {
    test("add(0,0)", () => {
        expect(add(0, 0)).toBe([0, null]);
    })

    test("test(1,0)", () => {
        expect(add(1, 0)).toBe([1, null]);
    })

    test("test(1,1)", () => {
        expect(add(1, 1)).toBe([1, 1]);
    })
})