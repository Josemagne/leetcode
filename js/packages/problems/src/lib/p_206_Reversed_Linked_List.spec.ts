import { LinkedLIst } from './data_structures/LinkedList';
import { ListNode } from './data_structures/ListNode';
import { reverseList } from './p_206_Reversed_Linked_List';
describe("206. Reverse Linked List", () => {
    test("1", () => {
        const numbers = [1, 2, 3, 4, 5]
        const linkedListTest = new LinkedLIst()
        linkedListTest.addAll(numbers)
        const listNode = new ListNode()
        const reversedLinkedListTest = reverseList()
        const reversedNumbers = linkedListTest.toArray



    })
})