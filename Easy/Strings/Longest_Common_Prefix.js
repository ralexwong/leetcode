// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

var longestCommonPrefix = function(strs) {
    let string = ""
    if (strs.length === 0) return string
    
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0].charAt(i)
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return string
            }
        }
        string = string + char
    }
    
    return string
};