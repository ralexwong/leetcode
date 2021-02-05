/* Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining.

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
0 <= n <= 3 * 104
0 <= height[i] <= 105

To measure how much water can be trapped between buildings we can take the minimum height between two buildings.

To do this we can take the maximum height coming from the right, then the left and take the minimum between the two nums


Runtime: O(n)
Will only take two passes

space: O(n)
Store an array takes n space
*/

const trap = height => {
    if (height.length <= 2) return 0

    let left = []
    let leftMax = 0;
    let rightMax = 0;
    let output = 0;

    // get the left heights
    for (let i = 0; i < height.length; i++) {
        leftMax = Math.max(leftMax, height[i])
        left.push(leftMax)
    }

    for (let i = height.length-1; i>= 0; i--) {
        rightMax = Math.max(rightMax, height[i])
        output += Math.min(left[i], rightMax) - height[i]
    }

    return output
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]), 6)


/*
Two pointer solution

Runtime: O(n)
Space: O(1)


*/

const constant_trap = height => {
    if (height.length <= 2) return 0;

    let left = 0;
    let right = height.length-1;

    let leftMax = 0;
    let rightMax = 0;

    let output = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left])
            output += leftMax - height[left]
            left++
        } else {
            rightMax = Math.max(rightMax, height[right])
            output += rightMax - height[right]
            right--
        }
    }

    return output
}

console.log(constant_trap([0,1,0,2,1,0,1,3,2,1,2,1]), 6)
