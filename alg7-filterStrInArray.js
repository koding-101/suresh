/*Filter out Strings from an Array
Create a function that takes an array of non-negative numbers and strings and return a new array without the strings.
Examples
filterArray([1, 2, "a", "b"]) ➞ [1, 2]
filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
Notes
Zero is a non-negative number.*/

const filterArray = arr => {
  var newArray = [];

  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

function testFilterArray(inputArr, expected) {
  if (JSON.stringify(filterArray(inputArr)) === JSON.stringify(expected)) {
    console.log("PASS 👍");
  } else {
    console.log("Fail 😢");
  }
}

testFilterArray([1, 2, "a", "b"], [1, 2]);
testFilterArray([1, "a", "b", 0, 15], [1, 0, 15]);
testFilterArray([1, 2, "aasf", "1", "123", 123], [1, 2, 123]);
testFilterArray([], []);
testFilterArray(["@abc ", 4, "", "#123"], [4]);
testFilterArray([" ", 8, ""], [8]);
testFilterArray(["a", "b",-1, 0, 1, "a"], [-1, 0, 1]); 
