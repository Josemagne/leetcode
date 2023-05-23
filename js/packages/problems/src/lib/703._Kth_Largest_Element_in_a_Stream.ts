/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

export class KthLargest {
    minHeap
    k: number

    constructor(k: number, nums: Array<number>) {
        this.k = k
        this.minHeap = nums
    }

    add(val: number): number {

    }
}
