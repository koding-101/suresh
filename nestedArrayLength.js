/*Write a function that returns the total number of non-nested items in a nested array.
Examples
getLength([1, [2, 3]]) ➞ 3
getLength([1, [2, [3, 4]]]) ➞ 4
getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
getLength([1, [2], 1, [2], 1]) ➞ 5
Notes
An empty array should return 0.*/

var total = 0;

function getTotalNumber(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      getTotalNumber(arr[i]);
    } else {
      total++;
    }
  }
  return total;
}

function testGetTotalNumber(array, exp) {
  if (getTotalNumber(array) === exp) {
    console.log("PASS 👍");
  } else {
    console.log("Fail 😢");
  }
}


testGetTotalNumber([1, [2, 3]], 3);
testGetTotalNumber([1, [2, [3, 4]]], 4);
testGetTotalNumber([1, [2, [3, [4, [5, 6]]]]], 6);
testGetTotalNumber([1, [2], 1, [2], 1], 5);
testGetTotalNumber([], 0);
testGetTotalNumber([1, []], 1);
