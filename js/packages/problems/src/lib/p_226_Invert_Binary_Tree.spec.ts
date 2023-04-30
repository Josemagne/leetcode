import { BinaryTreeNode } from './data_structures/BinaryTreeNode';
import { invertTree } from './p_226_Invert_Binary_Tree';
import { BinarySearchTree } from './data_structures/BinarySearchTree';

describe("Invert Binary Tree", () => {
    test("1", () => {
        const numbersBefore = [4, 2, 7, 1, 3, 6, 9]
        const numbersAfter = [4, 7, 2, 9, 6, 3, 1]

        const binarySearchTreeBefore = new BinarySearchTree()
        const binarySearchTreeAfter = new BinarySearchTree()

        numbersBefore.forEach((num) => {
            binarySearchTreeBefore.insert(num)
        })

        numbersAfter.forEach((num) => {
            binarySearchTreeAfter.insert(num)
        })

        const resultBefore = invertTree(binarySearchTreeBefore.root)
    })
})