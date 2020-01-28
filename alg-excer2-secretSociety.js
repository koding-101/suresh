
 /* A group of friends have decided to start a secret society. The name will be the first letter of each of their names
 sorted in alphabetical order.
 Create a function that takes in an array of names and returns the name of the secret society.
 ex:societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

Assumptions:
* All names in the arrya are alphabets
* No numbers or Empty names
* No Undefined ot special characters
* Any case names */

function getSecretSocietyName(arr) {
  var societyName = "";
  var i = 0;

  while (i < arr.length) {
    societyName +=  arr[i].charAt(0);
    i++;
  }
  return societyName;
}

function sortsocietyName(arr) { 
  var i = 0;
  var j; 

  while (i < arr.length) { 
    j = i + 1; 
      
    while (j < arr.length) { 
      if (arr[j] < arr[i]) { 
        var temp = arr[i]; 
        arr[i] = arr[j]; 
        arr[j] = temp; 
      } 
      j++; 
    } 
    i++; 
  }
  return getSecretSocietyName(arr);
} 

function testSecretSocietyName(arr, exptName) {
  if (sortsocietyName(arr) === exptName) {
    console.log("Secret society name is correct");
  } else {
    console.log("Secret society name is not correct");
  }
}

testSecretSocietyName(["Hand", "Arm", "Eye"], "AEH");
testSecretSocietyName(["Harry", "Newt", "Luna", "Cho"], 'CHLN');
testSecretSocietyName(["Plum", "Apple", "Mango","B"], "ABMP");
testSecretSocietyName(["Hand", "arm", "Eye"], "aEH");
testSecretSocietyName(["car", "van", "bike", "train"], "bctv");
testSecretSocietyName(["Hand", "Arm", ""], "AH");
testSecretSocietyName(["Car", "Van", "Bike", "Train"], "BCTV");