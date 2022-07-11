//I - string
//O - boolean
//C - NONE
//E - Empty strings are Palindrome

var isPalindrome = function(s) {
  let str = s.split('')
  let result = [];
  let valid = '01234567890abcdefghijklmnopqrstuvwxyz'

  for (let i of str) {
      if (valid.includes(i.toLowerCase())) {
          result.push(i.toLowerCase())
          }
  }
  return result.join('') === result.reverse().join('')
};