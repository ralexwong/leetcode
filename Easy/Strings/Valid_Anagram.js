// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let hash = new Map();
    
    s = s.split("")
    t = t.split("")
    
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === undefined) {
            hash[s[i]] = 1
        } else {
            hash[s[i]]++
        }
    }
    
    for (let i = 0; i < t.length; i++) {
        if (hash[t[i]] === undefined || hash[t[i]] === 0) {
            return false
        } else {
            hash[t[i]]--
        }
    }
    
    return true
};