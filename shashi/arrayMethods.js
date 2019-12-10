var inputArray = [1, 2, 3, 4, 5, 6];

function indexOf(inputArray, value) {
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === value) {
      return i;
    }
  }
}

console.log(indexOf(inputArray, 5));

var str = 'my%name%is%Shashi%Reddy%Tirumala%23';

function split(string, seperator) {
  var newArray = [];
  var index = 0;
  var spacing = [];
  var wordIndex = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === seperator) {
      spacing[index] = i;
      index++
    }
  }
  console.log('spacing', spacing);
  var startIndex = 0;
  for (var j = 0; j <= spacing.length; j++) {
    var endIndex;
    var word = '';
    if (endIndex === string.length - 1) {
      break;
    }
    endIndex = j == spacing.length ? string.length : spacing[j];

    for (var k = startIndex; k < endIndex; k++) {
      word = word + string[k];
    }
    startIndex = endIndex + 1;
    newArray[wordIndex] = word;
    wordIndex++;
  }
  return newArray;
}

console.log(split(str, '%'));

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