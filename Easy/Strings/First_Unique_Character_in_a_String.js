// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

var firstUniqChar = function(s) {
    let hash = new Map();
    
    s = s.split("");
    
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === undefined) {
            hash[s[i]] = 1
        } else {
            hash[s[i]]++
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === 1) {
            return i
        }
    }
    
    return -1
};