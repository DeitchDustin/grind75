// I - Root, ancestors to check
// O - number
// C -
// E -

var lowestCommonAncestor = function(root, p, q) {
  //create global variable to hold result;
  let result = null;

  //create recursive function to be used on root // nodes
  const dfs = (node) => {
    //if current node is null --> return false
    if (node === null) {
      return false;
    }
    //recurse through both left and right nodes to check.
    let left = dfs(node.left);
    let right = dfs(node.right);
    //check if current is p or q
    let current = node === p || node === q;

    //if 2 of 3 are true then set result to node
    if (left + right + current >= 2) {
      result = node;
    }
    //return if any are true up tree
    return left || right || current;
  }
  //initial call to recursive function
  dfs(root);
  //return global result
  return result;
};