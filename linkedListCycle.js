// I - linked list
// O - boolean
// C -
// E - if  only linked list head then true

var hasCycle = function(head) {
  //Create slow / fast var
  var tortoise = head;
  var hare = head;

  // while fast exists and has a next value
  while (hare && hare.next) {
    //set slow to next
         tortoise = tortoise.next;
         //set fast to next twice
         hare = hare.next.next;

         // if fast ever equals slow return true
      if (tortoise === hare) {
          return true;
          }
         }
//else return false
  return false;
};