// I - two strings
// O - boolean
// C - lowercase strings given
// E - No

//Less effiecient solution but cleaner code
var isAnagram = function(s, t) {
  sSort = s.split("").sort().join("");
  tSort = t.split("").sort().join("");
    return sSort === tSort;
};

//More Efficient solution -- Linear time complexity
var isAnagram = function(s, t) {
  var sLength = s.length;
  var tLength = t.length;

  if (sLength !== tLength) {
    return false;
  }

  let count = {};

  for (let i = 0; i < sLength; i++) {
    if (!count[s[i]]) {
      count[s[i]] = 0;
    }
    if (!count[t[i]]) {
      count[t[i]] = 0
    }
    count[s[i]]++;
    count[t[i]]--;
  }

  for (let letter in count) {
    if (count[letter] !== 0) {
      return false;
    }
  }

  return true;
};