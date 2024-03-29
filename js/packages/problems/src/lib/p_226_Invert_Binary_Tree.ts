import { BinaryTreeNode } from "./data_structures/BinaryTreeNode";

export function invertTree(root: BinaryTreeNode | null): BinaryTreeNode | null {

    if (!root) return root

    depthFirstSearch(root)

    return root
}


function depthFirstSearch(node: BinaryTreeNode): void {
    // If we reached the bottom where the leaves have no children nodes
    if (!node.left && !node.right) return

    // swap the subtrees
    [node.left, node.right] = [node.right, node.left]

    // Recursive part, here we invoke the func again
    if (node.left) depthFirstSearch(node.left)
    if (node.right) depthFirstSearch(node.right)
}