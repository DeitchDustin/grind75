//I array of nums
//O boolean - if any value appears twice
//C
//E if only 1 number then itll be false

var containsDuplicate = function(nums) {
  var set = {};
    for (var i = 0; i < nums.length; i++) {
        if (!set[nums[i]]) {
            set[nums[i]] = 1
            } else {
                return true
            }
    }
    return false;
};