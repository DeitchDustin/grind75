//I - two arrays of integeres (linked lists)
//O - sorted single array of integers
//C - both lists in non decreasing order -- nodes limited between 0 - 50
//E - if empty arrays return an empty array.

//RECURSIVE METHOD --
var mergeTwoLists = function(list1, list2) {
  // if either list is empty return the other list
  if (list1 === null) {return list2};
  if (list2 === null) {return list1};
  //if list 1 is less than list2 values
  if (list1.val < list2.val) {
      //set list1 next to recursive call with list1.next as arg
      list1.next = mergeTwoLists(list1.next, list2)
      //return list1
      return list1;
      //if list2 same but utilizing list2
      } else {
          list2.next = mergeTwoLists(list1, list2.next)
          return list2;
      }
};

//NON RECURSIVE METHOD --

var mergeTwoLists = function(list1, list2) {
  // create new LinkedList
  let newList = new ListNode(0);
  //Maintain references to head of linked list
  let headOfList = newList;
  //While loop -- while still elements in both lists
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      newList.next = list1;
      list1 = list1.next;
    } else {
      newList.next = list2;
      list2.next;
    }
    newList = newList.next;
  }
  if (list1 === null) {
    newList.next = list2;
  } else {
    newList.next = list1;
  }
  return headOfList.next;
};