import { LinkedList } from './data_structures/LinkedList';
import { ListNode } from './data_structures/ListNode';
import { reverseList } from './p_206_Reversed_Linked_List';
describe("206. Reverse Linked List", () => {
    test("1", () => {
        // GIVEN
        const numbers = [1, 2, 3, 4, 5]
        const linkedListTest = new LinkedList()
        linkedListTest.addAll(numbers)

        // DO
        const reversedLinkedListTest = reverseList(linkedListTest.head)
        const compareLinkedListTest = new LinkedList()
        compareLinkedListTest.head = reversedLinkedListTest as ListNode
        const reversedNumbers = compareLinkedListTest.toArray()

        // COMPARE
        expect(reversedNumbers).toEqual([5, 4, 3, 2, 1])



    })
})