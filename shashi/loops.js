var arr = [1,2,3,4,5];

//all odd
function allOdd(array) {
  var newArrOdd = [];
  for( var i=0;i<array.length;i++){
      if((array[i]%2) == 1) {
        newArrOdd.push(array[i])
      }
  }
  return newArrOdd;
} 

function allOddWhile(array){
  var newArrOdd = [];
  var i=0;
  while(i<array.length){
    if((array[i]%2) == 1) {
      newArrOdd.push(array[i])
    }
    i++;
  }
  return newArrOdd;
}
allOdd(arr);
allOddWhile(arr);

//all even
function allEven(array) {
  var newArrEven = [];
  for( var i=0;i<array.length;i++){
      if((array[i]%2) != 1) {
        newArrEven.push(array[i])
      }
  }
  return newArrEven;
} 

function allEvenWhile(array){
  var newArrEven = [];
  var i=0;
  while(i<array.length){
    if((array[i]%2) != 1) {
      newArrEven.push(array[i])
    }
    i++;
  }
  return newArrEven;
}

allEven(arr);
allEvenWhile(arr);

//backwords
function backwords(array){
  var backWordArr = [];
  for(var i=array.length-1; i>=0; i--){
    backWordArr.push(array[i]);
  }
  return backWordArr;
}

function backwordsWhile(array){
  var backWordArr = [];
  var i = array.length-1;
  while(i>=0){
    backWordArr.push(array[i]);
    i--;
    }
  return backWordArr;
}

backwords(arr);
backwordsWhile(arr);

var arr1 = [6,7,8,9,10];
var arr = [1,2,3,4,5];

//combine both arrays

function combineArr(array1,array2){
  var combinedArr =[];
   combinedArr= array1;
  for(var i=0;i<array2.length;i++){
    combinedArr.push(array2[i]);
  }
  return combinedArr;
}

function combineArrWhile(array1,array2){
  var combinedArr =[];
   combinedArr= array1;
   var i=0;
   while(i<array2.length){
    combinedArr.push(array2[i]);
    i++;
   }
  return combinedArr;
}


combineArr(arr, arr1);
combineArrWhile(arr, arr1);

//alternate item

function alternate(array1, array2){
  var maxLength = 0;
  var altArr=[];
  if(array1.length >= array2.length){
    maxLength = array1.length;
  } else {
    maxLength = array2.length;
  }
  for (var i = 0; i < maxLength; i++) {
    altArr.push(array1[i], array2[i]);
}
  return altArr;
}

  function alternateWhile(array1, array2){
    var maxLength = 0;
    var altArr=[];
    if(array1.length >= array2.length){
      maxLength = array1.length;
    } else {
      maxLength = array2.length;
    }
    console.log(maxLength);
    var i=0;
    while(i < maxLength){
      altArr.push(array1[i], array2[i]);
      i++;
    }
    return altArr;
  }

alternate(arr, arr1);
alternateWhile(arr, arr1);

var arr1 = [6,7,8,9,10];
var arr = [1,2,3,4,5];
var arr2 = [2,8,1,10,5,6];

//all even
allEven(arr2);
allEvenWhile(arr2);

//all odd
allOff(arr2);
allOffWhile(arr2);

var arr3 = [
  {type: "socks", quantity: 1},
  {type: "shoes", quantity: 3},
  {type: "pants", quantity: 1},
  {type: "socks", quantity: 5},
  {type: "shoes", quantity: 1},
  {type: "socks", quantity: 10}
];

//return total socks
function totalSocks(array){
  var total=0;
  for(var i=0;i<array.length;i++){
    if(array[i].type === "socks"){
    total = total+array[i].quantity;
    }
  }
  return total;
}
function totalSocksWhile(array){
  var total=0;
  var i=0;
  while(i<array.length){
    if(array[i].type === "socks"){
      total = total+array[i].quantity;
      i++;
    }
  }
  return total;
}

totalSocks(arr3);
totalSocksWhile(arr3);

var str = "supercalifragilisticexpialidocious";

//number of a's in this string
function countOfA(string1){
  var count = 0;
  var stringF = string1.toLowerCase();
  for(var i=0; i<string1.length; i++){
    if(stringF[i]=== 'a'){
      count++
    }
  }
  return count;
}

function countOfAWhile(string1){
  var count = 0;
  var stringF = string1.toLowerCase();
  var i=0;
  while(i<stringF.length){
    if(stringF[i]=== 'a'){
      count++
    }
    i++;
  }
  return count;
}

countOfA(str);
countOfAWhile(str);


//count number of vowels
const countVowels = string1 => [...string1].filter(c => 'aeiou'.includes(c.toLowerCase())).length;;

countVowels(str);

