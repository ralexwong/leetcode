// https://leetcode.com/problems/longest-palindromic-substring/submissions/

// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"

const longestPalindrome = (s) => {
    let start = 0;
    let end = 0;
    
    for (let i = 0; i < s.length; i++) {
        
        let double = doublef(s, i, i+1)
        let single = singlef(s, i, i)
        
        if (double[1] - double[0] > end-start) {
            start = double[0]
            end = double[1]
        }
        
        if (single[1] - single[0] > end-start) {
            start = single[0]
            end = single[1]
        }
    }
    
    return s.substring(start, end+1)
    
};

const doublef = (s, start, end) => {
    let left = start;
    let right = start;
    
    while (s[start] == s[end] && start >= 0 && end < s.length) {
        left = start;
        right = end;
        start--
        end++
    }
    
    return [left, right]
}

const singlef = (s, start, end) => {
    let left = start;
    let right = start;
    
    while (s[start] == s[end] && start >= 0 && end < s.length) {
        left = start;
        right = end;
        start--
        end++
    }
    
    return [left, right]
}