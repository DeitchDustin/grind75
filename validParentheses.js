// I - string of brackets such as {} [] ()
// O - boolean - if valid or not
// C - paranthesus only within s
// E - None

var isValid = function(s) {
  // create empty array to hold values -- stack
    let stack = [];
  // create a list of all chars possible key val pairs
    let chars = {')': '(', ']':'[', '}':'{'};
  //iterate through s to check if it is an open character
    for (const char of s) {
      console.log(chars[char])
      //if chars does not hold char as a value
      if (!chars[char]) {
        //push char into stack
          stack.push(char)
          }
          //else if pop of stack does not equal val in obj
        else if (stack.pop() !== chars[char]) {
          // return false
                 return false
                 }
    }
    //return if stacks length is 0 to check if all values have been checked
    return stack.length === 0;
};