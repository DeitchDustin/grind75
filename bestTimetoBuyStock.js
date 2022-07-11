//I - array of numbers / Index is the day
//O - number of profit gained
//C - NONE
//E - return 0 if no profit gained
var maxProfit = function(prices) {
  // Want lowest value of array to be initial -- bought
  // Want highest value after lowest value index to be sell value.

  //create highestProfit var set to 0
    let highestProfit = 0;
    //create minNum var to store lowest val
    let minNum = prices[0];
  // iterate through prices array --
    for (var i = 1; i < prices.length; i++) {
        //set const to store price at index
       const sell = prices[i];
        // set profit var -- munus minNum from sell
        let profit = sell - minNum;
        //set highestProfit to the max of the current profit and highest to this point
         highestProfit = Math.max(highestProfit, profit)
        //if sell is less than minNum then set minNum to sell
        if (sell < minNum) {
            minNum = sell;
            }
    }
    //return highestProfit;
  return highestProfit;
};