//I - number of steps - integer
//O - number of ways to get there - integer
//C - steps from 1 to 45
//E - 1 step = 1 solution; 2 = 2

var climbStairs = function(n) {
  //set array to store solns for each
  let dp = [];

  //1 will always be 1 soln and 2 will always be 2 set these in arr
   dp[1] = 1;
   dp[2] = 2;

   //iterate through up to n starting at 3
   for (var i = 3; i <= n; i++) {
    //get soln of i by adding soln from previous 2 -- fibonacci
       dp[i] = dp[i - 1] + dp[i - 2]
   }

   //return arr at n for result
   return dp[n]
};