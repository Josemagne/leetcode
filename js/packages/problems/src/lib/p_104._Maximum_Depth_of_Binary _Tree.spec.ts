import { BinarySearchTree } from "./data_structures/BinarySearchTree"
import { maxDepth } from './p_104._Maximum_Depth_of_Binary _Tree';

describe("Maximum Depth of Binary Tree", () => {
    test("1", () => {
        const numbers = [3, 9, 20, null, null, 15, 7]

        const tree = new BinarySearchTree()

        numbers.forEach((num) => {
            if (num !== null) {
                tree.insert(num)
            }
        })

        const result = maxDepth(tree.root)

        expect(result).toBe(3)
    })
})