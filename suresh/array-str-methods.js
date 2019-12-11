var array = ['a', 1, 2, 'b', 'xyz'];

function indexOf(array, ele) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === ele) {
      return i;
    }
  }
}

console.log('Array - indexOf: ' + indexOf(array, 'b'));

var str = 'learning coding'

console.log('String - indexOf: ' + indexOf(str, 'a'));

var str = 'I%am%Learning%coding';

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

var pets = ['dog', 'cat', 'rabbit', 'chickens', 'fish'];

function slice(input, start, end) {
  var slicedArray = [];
 
  for (var i = start; i < end; i++) {
  	slicedArray.push(input[i]);
  }
  return slicedArray;
}

console.log('array Slice' + slice(pets, 1, 4));

var str = 'learning coding'

function strSlice(input, start, end) {
  var slicedStr = '';
 
  for (var i = start; i < end; i++) {
 		slicedStr += input[i];
  }
  return slicedStr;
}

console.log('String Slice: ' + strSlice(str, 1, 4));

function shift(arr) {
  var shiftedArray = [];
  var result = arr[0];
  for (var i = 0; i < arr.length - 1; i++) {
    shiftedArray[i] = arr[i+1];
  }
  arr = shiftedArray;
  console.log(shiftedArray);
  return result;
}

console.log('array Shift: ' + shift(array)); 
