var isValidBST = function(root) {
  function recurse (root, min, max) {
      //base cases
      if(root === null) {
         return true;
         }
      if (root.val >= max || root.val <= min) {
         return false;
          }
      //recursion
      return recurse(root.left, min, root.val) && recurse(root.right, root.val, max)
  }
    return recurse(root, -Infinity, Infinity)
};