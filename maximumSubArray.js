// I - Array of Numbers
// O - Number
// C -
// E - If only one value return that value.

var maxSubArray = function(nums) {
  //Initialize for the total max make so its smallest possible number
  let maxSum = -Infinity;
  //Initialize sum for current Max
  let currentSum = 0;
  //Iterate through nums to access each value
  for (var i = 0; i < nums.length; i++) {
    //set current Sum to Max of nums - current sums + nums
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    //set maxSum to max of new current sum or maxsum
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum
};