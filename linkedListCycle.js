// I - linked list
// O - boolean
// C -
// E - if  only linked list head then true

var hasCycle = function(head) {
  var tortoise = head;
  var hare = head;

  while (hare && hare.next) {
         tortoise = tortoise.next;
         hare = hare.next.next;

      if (tortoise === hare) {
          return true;
          }
         }

  return false;
};