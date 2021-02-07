/*
https://leetcode.com/problems/binary-tree-right-side-view/

Given a binary tree, imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * BFS with a level order queue
 * 
 * enqueue the left nodes first, then right nodes to get the right most node
 * then check if the current node is the last node of that level and push the node.val into output
 * 
 * 
 */

const rightSideView = root => {
    if (root == null) return [];

    let output = [];
    let queue = [root];

    while (queue.length) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            if (i == size-1) {
                output.push(node.val)
            }

            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right)
            }
        }
    }

    return output
}

let example = [1,2,3,null,5,null,4];
console.log(rightSideView(example), [1, 3, 4])

