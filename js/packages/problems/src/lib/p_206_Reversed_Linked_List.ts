/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import { ListNode } from "./data_structures/ListNode";

export function reverseList(head: ListNode | null): ListNode | null {

    if (!head) return null

    let reversedList = new ListNode()

    const arrayStack = new Array<number>()

    let currentNode = head

    // Fill array with the numbers of the linkedlist
    while (currentNode.next !== null) {
        arrayStack.push(currentNode.val)
        currentNode = currentNode.next
    }

    reversedList.val = arrayStack[0]

    for (let i = arrayStack.length - 1; 1 < arrayStack.length; i--) {
        const element = arrayStack[i];
        reversedList.next = new ListNode(element)
        reversedList = reversedList.next
    }

    return reversedList

}