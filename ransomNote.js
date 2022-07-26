 //I two strings
 //O boolean
 //C length of each string and all lowercase
 //E


 //NOT RIGHT NEED TO FIX
 
 var canConstruct = function(ransomNote, magazine) {
  //create hashmap to store all values in ransomNote
  var hash = {};
  var ransomNoteArray = ransomNote.split('');
  var magazineArray = magazine.split('');
  console.log(magazineArray)

  //iterate through ransomNote and push values into hash
    //if value not exist in has then set to 1
    // else increment the hash value
    for (var i = 0; i < ransomNoteArray.length; i++) {
      if(!hash[ransomNote[i]]) {
      hash[ransomNote[i]] = 1;
      } else {
      hash[ransomNote[i]] = hash[ransomNote[i]] + 1;
      }
    }

  //iterate through magazine
    //check if value is in hash-- if it is --
     //decrement number

   for (var i = 0; i < magazineArray.length; i++) {
     if (hash[magazine[i]]) {
       hash[magazine[i]] = hash[magazine[i]] - 1;
     }
   }

  //iterate through each key in hash
    //if value is greater than 0
    //return false
  //return true
  for (var key in hash) {
    if (hash[key] > 0) {
      return false
    } else {
      return true;
    }
  }
};