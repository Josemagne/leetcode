export class BinaryTreeNode {
    val: number | null
    left: BinaryTreeNode | null
    right: BinaryTreeNode | null
    constructor(val?: number, left?: BinaryTreeNode, right?: BinaryTreeNode) {
        this.val = (val === undefined ? null : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}