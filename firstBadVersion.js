//API checker to see if bad
var solution = function(isBadVersion) {
//fuction to push into API to check version
  return function(n) {
    //set start to 0 and end to n
    let start = 0;
    let end = n;

    //while start is less than the end
    while (start < end) {
      //set middle to average of start and end (floor)
      const middle = Math.floor((start + end) / 2)
      //if it is a bad version at the middle set end to the middle
      if (isBadVersion(middle)) {
        end = middle;
        //else set start to middle plus 1
      } else {
        start = middle + 1;
      }
    }
    //return end
      return end;
  };
};