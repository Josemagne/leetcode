import { BinaryTreeNode } from "./BinaryTreeNode";

export class BinarySearchTree {
    root: BinaryTreeNode | null

    constructor(root?: BinaryTreeNode) {
        this.root = root == undefined ? null : root;
    }

    insert(val: number) {
        let currentNode = this.root

        // If the root is empty then we insert it into root
        if (!currentNode) {
            this.root = new BinaryTreeNode(val)
        }

        else {

            while (currentNode) {

                if (currentNode.val as number < val) {
                    if (!currentNode.left) {
                        currentNode.left = new BinaryTreeNode(val)
                        break
                    }
                    else {
                        currentNode = currentNode.left
                    }

                }
                else {
                    if (!currentNode.right) {
                        currentNode.right = new BinaryTreeNode(val)
                        break
                    }
                    else {
                        currentNode = currentNode.right
                    }
                }

            }
        }
    }


}