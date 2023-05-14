interface IListNode {
    /**
     * The value in the particular node
     */
    val: number;
    /**
     * The next node in the linked list 
     */
    next: ListNode | null;

}

export class ListNode implements IListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val == undefined ? 0 : val
        this.next = next === undefined ? null : next
    }

}
