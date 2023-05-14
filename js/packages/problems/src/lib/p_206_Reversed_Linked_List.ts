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
import { Stack } from "./data_structures/Stack";

export function reverseList(head: ListNode | null): ListNode | null {

    if (!head) return null

    const reversedList = new ListNode()

    const arrayStack = []

    let currentNode = head

    while (currentNode.next !== null) {
        arrayStack.push(currentNode.val)
        currentNode = currentNode.next
    }

    reversedList.val = arrayStack[0]
    let currentNode2 = reversedList

    for (let i = 1; i < arrayStack.length; i++) {
        const element = arrayStack[i];
        currentNode2.next = new ListNode(element)
        currentNode2 = currentNode2.next
    }

    return reversedList

}