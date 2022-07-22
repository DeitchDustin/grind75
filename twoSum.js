//I - Array of integers and integer as target
//O - array of integers that add up to target
//C - Not use same element twice
//E - None.

var twoSum = function(nums, target) {
  // set empty hash to store key and value of num / index
let hash = {};
  // iterate through nums to access each number
  for (var i = 0; i < nums.length; i++) {
      //set variable to hold individual numbers
    const num = nums[i];
      //if the hash at key minus current num is not undefined...
      if (hash[target - num] !== undefined) {
          //return hash at the key and i within array as result
          return [hash[target - num], i];
          }
      //else set hash at current num to the index to store key/val
      hash[num] = i;
  }
  //if none then return empty array.
  return [];
};

