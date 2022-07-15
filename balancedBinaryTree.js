// I - Root of binary tree
// O - Boolean
// C -
// E - If empty tree, will be true.

var isBalanced = function(root) {
  //Send root to helper function starting at depth of 0
  //return if not negative --> true / else false
  return helper(root, 0) >= 0;
};

//create helper function to handle depth check.
let helper = (root, depth) => {
  //if there is no root then return 0 -- true case
  if (!root) {
      return depth;
      }
   // recurse through helper with both left and right increment depth.
  let left = helper(root.left, depth + 1);
  let right = helper(root.right, depth+1);

  // if left/ right is -1 or absolute vale of left - right > 1
  //return -1 -- false case
  if (left === -1 || right === -1 || Math.abs(left - right) > 1 ) {
      return -1;
      }
      //else return max value of left or right -- true case
  return Math.max(left, right);
};