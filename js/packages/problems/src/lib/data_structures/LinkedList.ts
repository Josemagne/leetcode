import { ListNode } from "./ListNode";

interface ILinkedList {
    head: ListNode;

    /**
     * Adds a node to the linked list
     */
    add(num: number): boolean;

    /**
     * Adds the element at the beginning
     * @param num 
     */
    addFirst(num: number): boolean;

    /**
     * Adds all the numbers to the linked list
     * @param nums 
     */
    addAll(nums: number[]): boolean;

    /**
     * Converts the linked list to an array
     */
    toArray(): number[]

}

export class LinkedList implements ILinkedList {
    head: ListNode
    constructor(head?: ListNode) {
        this.head = head === undefined ? this.head = new ListNode() : this.head = head;
    }

    add(num: number) {
        let currentNode = this.head

        while (currentNode.next !== null) {
            currentNode = currentNode.next
        }

        currentNode.next = new ListNode(num)

        return true
    }

    addAll(nums: number[]) {
        let currentNode = this.head

        while (currentNode.next !== null) {
            currentNode = currentNode.next
        }

        // We found the last node
        nums.forEach((val) => {
            currentNode.next = new ListNode(val)
            currentNode = currentNode.next
        })

        return true
    }

    addFirst(num: number) {
        const newHeadNodde = new ListNode(num)
        const headCopy = JSON.parse(JSON.stringify(this.head))

        newHeadNodde.next = headCopy
        this.head = newHeadNodde

        return true
    }

    toArray() {
        const numberArray: number[] = []

        let currentNode = this.head

        while (currentNode.next !== null) {
            numberArray.push(currentNode.val)
            currentNode = currentNode.next
        }

        return numberArray
    }

}