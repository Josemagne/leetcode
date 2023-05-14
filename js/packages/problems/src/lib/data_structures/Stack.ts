interface ISTack {
    values: number[]
    push(num: number): number
    pop(num: number): number | undefined
    toArray(): number[]

}

export class Stack implements ISTack {
    values: number[] = []

    push(num: number) {
        this.values.push(num)
        return num
    }

    pop(num: number) {
        const val = this.values.pop()
        this.values.splice(this.values.length - 1, 1)
        return val
    }

    toArray() {
        return this.values
    }

}