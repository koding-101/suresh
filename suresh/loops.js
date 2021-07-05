//Loops for / while

var arr = [1,2,3,4,5];

//write a function that returns all odd numbers - [1,3,5]
function oddNos (array) {
  var oddNums = [];

  for (var i = 0; i < array.length; i++) {
 	  if (array[i] % 2 !== 0) {
  	  oddNums.push(array[i]);
    }
  }
  return oddNums;
}

console.log("Odd numbers with For loop: ", oddNos(arr));

function oddNosWithWhile (array) {
  var oddNums = [];
  var arrLength = array.length;
  var i = 0;

  while (i < arrLength) {
 	  if (array[i] % 2 !== 0) {
  	  oddNums.push(array[i]);
    }
    i++;
  }
  return oddNums;
}

console.log("Odd numbers with While loop: ", oddNosWithWhile(arr));

//write a function that returns all even numbers -[2,4]
function evenNos (array) {
  var evenNums = [];

  for (var i = 0; i < arr.length; i++) {
    if (array[i] % 2 === 0) {
      evenNums.push(array[i]);
    }
  }
  return evenNums;
}

console.log("Even numbers with For loop: ", evenNos(arr));

function evenNosWithWhile (array) {
  var evenNums = [];
  var arrLength = array.length;
  var i = 0;

  while (i < arrLength) {
 	  if (array[i] % 2 === 0) {
  	  evenNums.push(array[i]);
    }
    i++;
  }
  return evenNums;
}

console.log("Even numbers with While loop: ", evenNosWithWhile(arr));

//write a function that returns the array backwards - [5,4,3,2,1];
function reverse(array) {
  var reverseArray = [];
  var i = array.length-1;

  for (i; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}

console.log("Reverse with For loop: ", reverse(arr));

function reverseWithWhile (array) {
  var reverseArray = [];
  var i = array.length-1;

  while (i >= 0) {
 	  reverseArray.push(array[i]);
    i--;
  }
 return reverseArray;
}

console.log("Reverse with While loop: ", reverseWithWhile(arr));

var arr1 = [6,7,8,9,10];
//write a function that combines both arrays - [1,2,3,4,5,6,7,8,9,10]
function combinesArray(arr1, arr2) {
	var combArr = arr.slice();

  for (var i = 0; i < arr2.length; i++) {
    combArr.push(arr2[i]);
  }
  return combArr;
}
 
console.log("Combines array with For loop: ", combinesArray(arr, arr1));

function combinesArray1(arr1, arr2) {
	var combArr1 = [];

  combArr1 = arr1.concat(arr2);
  return combArr1;
}
 
console.log("Combines array with For loop: ", combinesArray1(arr, arr1));

function combinesArrayWithWhile(arr1, arr2) {
	var combArr = arr.slice();
  var arrLength = arr2.length;
  var i = 0;

	while (i < arrLength) {
 		combArr.push(arr2[i]);
 		i++;
 	}
  return combArr;
}
 
console.log("Combines array with While loop: ", combinesArrayWithWhile(arr, arr1));
 
//write a function that alternates items in each array - [1,6,2,7,3,8,4,9,5,10];

function alternatesArray(arr1, arr2) {
	var maxLength = arr1.length > arr2.length ? arr1.length : arr2.length;
  var altArray = [];

  for (var i = 0; i < maxLength; i++) {
    altArray.push(arr1[i], arr2[i]);
  }
  return altArray;
}
 
console.log("Alternative array with For loop: ", alternatesArray(arr, arr1))

function alternatesArrayWithWhile(arr1, arr2) {
	var maxLength = arr1.length > arr2.length ? arr1.length : arr2.length;
  var altArray = [];
  var i = 0;

	while (i < maxLength) {
 		altArray.push(arr1[i], arr2[i]);
 		i++;
 	}
  return altArray;
}
 
console.log("Alternative array with While loop: ", alternatesArrayWithWhile(arr, arr1));

var arr2 = [2,8,1,10,5,6];
//write a function that returns all even number - [2,8,10,6]
function evenNos1 (arr) {
  var evenNums = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNums.push(arr[i]); 
    }
  }
  return evenNums;
}

console.log("Even numbers with For loop: ", evenNos1(arr2));

function evenNos1WithWhile (array) {
  var evenNums = [];
  var arrLength = array.length;
  var i = 0;

  while (i < arrLength) {
 	  if (array[i] % 2 === 0) {
  	  evenNums.push(array[i]);
    }
    i++;
  }
  return evenNums;
}

console.log("Even numbers with While loop: ", evenNos1WithWhile(arr2));

//write a function that returns all odd numbers - [1,5]
function oddNos1 (arr) {
  var oddNums =  [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddNums.push(arr[i]);
    }
  }
  return oddNums;
}

console.log("Odd numbers with For loop: ", oddNos1(arr2));

function oddNos1WithWhile (array) {
  var oddNums = [];
  var arrLength = array.length;
  var i = 0;

  while (i < arrLength) {
   	if (array[i] % 2 !== 0) {
    	oddNums.push(array[i]);
    }
    i++;
  }
  return oddNums;
}

console.log("Odd numbers with While loop: ", oddNos1WithWhile(arr2));

var arr3 = [
  {type: "socks", quantity: 1},
  {type: "shoes", quantity: 3},
  {type: "pants", quantity: 1},
  {type: "socks", quantity: 5},
  {type: "shoes", quantity: 1},
  {type: "socks", quantity: 10}
];

//write a function that returns the total quantity of the socks
function typeQuantity(type, arr) {  /* good job*/ 
  var qty = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].type === type ) {
      qty += arr[i].quantity;
    }
  }
  return qty;
}

console.log("type qty with For loop: ", typeQuantity("socks", arr3));

function typeQuantityWithWhile(type, arr) {  /* good job*/ 
  var qty = 0
  var arrLength = arr.length;
  var i = 0;

  while (i < arrLength) {
    if (arr[i].type === type ) 
      qty += arr[i].quantity;
      i++
  }
  return qty;
}

console.log("type qty with For loop: ", typeQuantityWithWhile("socks", arr3));

var str = "supercalifragilisticexpialidocious";

//write a function that returns the number of "a" in the str;
function numOfChar(str, char) {
  return (str.split(char).length-1);
}

console.log("number of chars with For loop: ", numOfChar(str, "a"));

//OR

function numOfChars(str, char) {
  var count = 0

  for (var i = 0; i < str.length; i++) {
	  if (str[i] === char) {
    count++;
    }
  }
  return count;
}

console.log("number of chars with For loop: ", numOfChar(str, "a")); 

function numOfCharsWithWhile(str, char) {
  var strLength = str.length;
  var count = 0;
  var i = 0;

	while (i < strLength) {
 		if (str[i] === char) {
   		count++;
  	}
 		i++;
 	}
  return count;
}

console.log("number of chars with While loop: ", numOfCharsWithWhile(str, "a"));

//write a function that returns the number of vowels in the str;
function vowelsCount(str1)
{
  var vowels = 'aeiou';
  var count = 0;

  for(var x = 0; x < str1.length ; x++) {
    if (vowels.indexOf(str1[x].toLowerCase()) !== -1){
      count++;
    }
  }
  return count;
}

console.log("number of vowels with For loop: ", vowelsCount(str));

function vowelsCountWithWhile(str1) {
  var vowels = 'aeiou';
  var strLength = str.length;
  var count = 0;
  var i = 0;

	while (i < strLength) {
  	if(vowels.includes((str1[i].toLowerCase()))) {
   		count++;
  	}
 		i++;
 	}
  return count;
}

console.log("number of vowels with While loop: ", vowelsCountWithWhile(str));
