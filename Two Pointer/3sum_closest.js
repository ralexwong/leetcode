// https://leetcode.com/problems/3sum-closest/

// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

 

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 

// Constraints:

// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4


const threeSumClosest = (nums, target) => {
    if (nums.length === 3) return nums[0]+nums[1]+nums[2];

    let actualSum = Infinity;
    let diff = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let low = i+1;
        let high = nums.length-1

        while (low < high) {
            let sum = nums[i]+nums[low]+nums[high];

            if (Math.abs(sum-target) < diff) {
                diff = Math.abs(sum-target)
                actualSum = sum
            } else if (sum < target) {
                low++
            } else {
                high--
            }
        }
    }
    return actualSum
}