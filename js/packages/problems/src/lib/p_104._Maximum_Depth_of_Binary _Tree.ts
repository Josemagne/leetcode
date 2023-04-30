import { BinaryTreeNode } from "./data_structures/BinaryTreeNode";

export function maxDepth(root: BinaryTreeNode | null): number {
    if (!root) return 0

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))

}