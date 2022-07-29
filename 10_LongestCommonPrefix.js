// Longest Common Prefix
// Write function to find the longest common prefix string amongst an array of strings
// If there is no common prefix, return an empty string "".

// Example1 :
// Input : strs = ["flower", "flow", "flight"]
// Output : "fl"

// Example2 :
// Input : strs = ["dog", "racecar", "car"]
// Output : ""



const example1 = ["flower", "flow", "flight"];
const example2 = ["dog", "racecar", "car"];

var longestCommonPrefix = function (strs) {
  let prefix = "";

  if (strs === null || strs.length === 0) {
    return prefix;
  }

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return prefix;
      }
    }

    // build prefix
    prefix = prefix + char;
  }
  return prefix;
};

console.log(longestCommonPrefix(example1));
console.log(longestCommonPrefix(example2));
