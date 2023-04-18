import { createCounter } from './p_2620_counter';

describe('createCounter', () => {
    test("should return [1,2,3]", () => {
        const result: { [timeCalled: string]: number[] } = {}

        for (let i = 0; i < 3; i++) {
            const returnFn = createCounter(1)
            result[i.toString()] = returnFn()
        }

        expect(result['2']).toEqual([1, 2, 3])
    })
})