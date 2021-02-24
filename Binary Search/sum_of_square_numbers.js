// https://leetcode.com/problems/sum-of-square-numbers/

// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:

// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5
// Example 2:

// Input: c = 3
// Output: false
// Example 3:

// Input: c = 4
// Output: true
// Example 4:

// Input: c = 2
// Output: true
// Example 5:

// Input: c = 1
// Output: true

const judgeSquareSum = (target) => {
    // 0, 1, 2 are all covered 
    if (target < 3) return true

    // we test the case of 0**2 + right**2 == target
    let right = Math.floor(Math.sqrt(target))

    if (right**2 == target) return true
    
    // start our two pointers
    let left = 1;

    while (left <= right) {
        let total = left**2 + right**2;

        // boilerplate binary search
        if (total == target) return true
        else if (total < target) {
            left++
        } else {
            right--
        }
    }

    return false
}