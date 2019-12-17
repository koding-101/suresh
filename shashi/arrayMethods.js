function indexOf(strArr, strNum) {
  if (
    typeof strArr === "string" &&
    typeof strNum === "string" &&
    strArr.length > strNum.length
  ) {
    var result = -1;
    var strNumChecker = "";
    var strNumIndex = 0;

    for (var i = 0; i < strArr.length; i++) {
      if (strArr[i] === strNum[strNumIndex]) {
        if (result === -1) {
          result = i;
        }

        if (strNumIndex === strNum.length - 1) {
          return result;
        }

        strNumChecker += strNum[strNumIndex];
        strNumIndex++;

      } else if (result > -1) {
        result = -1;
        strNumChecker = "";
        strNumIndex = 0;
      }
    }
  } else if (Array.isArray(strArr)) {
    for (var i = 0; i < strArr.length; i++) {
      if (strArr[i] === strNum) {
        return i;
      }
    }
  }

  return -1;
}

console.log(indexOf(testString, "way"));
console.log(indexOf(inputArray2, "this"));
console.log(indexOf(inputArray, 56));


var stringTest = 'my%name%is%Shashi%Reddy%Tirumala%23'; //should return ["my", "name", "is", "Shashi", "Reddy", "Tirumala", "23"]
var test1 = 'my%name%is%Shashi%Reddy%Tirumala%'; // should return "my", "name", "is", "Shashi", "Reddy", "Tirumala", ""]
var test2 = 'name%is%Shashi%Reddy%Tirumala%23';// should return ["", "name", "is", "Shashi", "Reddy", "Tirumala", "23"]
var test3 = '%name%is%%Shashi%Reddy%Tirumala%23';// expected ["", "name", "is", "", "Shashi", "Reddy", "Tirumala", "23"]
var test4 = "aa"
//console.log('actual split', test1.split('%'));

function split(string, seperator) {
  var newArray = [];
  var ele = "";

  for (var i = 0; i < string.length; i++) {
    if (string[i] != seperator) {
      ele = ele + string[i];
    } else if (i !== string.length - 1) {
      newArray.push(ele);
      ele = "";
    } else {
      newArray.push(ele);
    }

  }
  return newArray;
}
console.log(split(test1, '%'));

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
function slice(arr, start, end = arr.length - 1) {
  var newArray = [];
  var j = 0;
  for (var i = start; i < arr.length; i++) {
    if (i <= end) {
      newArray[j] = arr[i];
      j++
    }
  }
  return newArray;
}

console.log(slice(inputArray, 2, 4));


function shift(arr) {
  var newArray = [];
  var result = arr[0];
  for (var i = 0; i < arr.length - 1; i++) {
    newArray[i] = arr[i + 1];
  }
  arr = newArray;
  console.log(arr);
  return result;
}

console.log(shift(inputArray));