// https://leetcode.com/problems/valid-perfect-square/
// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

 

// Example 1:

// Input: num = 16
// Output: true
// Example 2:

// Input: num = 14
// Output: false
 

// Constraints:

// 1 <= num <= 2^31 - 1

const isPerfectSquare = (num) => {
    if (num == 1) return true;

    let left = 2;
    let right = num;

    while (left <= right) {
        // get mid num
        let mid = Math.floor((left+right)/2)
        // calculate the square
        let square = mid*mid;

        // boilerplate binary search
        if (square == num) return true
        else if (square < num) {
            low = mid+1
        } else {
            high = mid-1
        }
    }

    return false
}