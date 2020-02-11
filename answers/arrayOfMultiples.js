import { testArray } from "./helpers/test.js";
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.
// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
// Notes
// Notice that num is also included in the returned array

function arrayOfMultiples(num, multiple = 1) {
  const result = [];

  if (typeof num === "number") {
    for (let i = 1; i <= multiple; i++) {
      result.push(num * i)
    }
  }

  return result;
}

function testArrayOfMultiples(arr, expect) {
  testArray(arrayOfMultiples(...arr), expect)
}

testArrayOfMultiples([7, 5], [7, 14, 21, 28, 35])
testArrayOfMultiples([12, 10], [12, 24, 36, 48, 60, 72, 84, 96, 108, 120])
testArrayOfMultiples([17, 6], [17, 34, 51, 68, 85, 102])
testArrayOfMultiples([7], [7])
testArrayOfMultiples([], [])
testArrayOfMultiples([0], [0])
testArrayOfMultiples([0, 3], [0, 0, 0])
testArrayOfMultiples([-1], [-1])
testArrayOfMultiples([-1, 2], [-1, -2])
testArrayOfMultiples([-1, -2], [])

//---------------  recursion --------------- //


// works only with positive numbers.
function arrayOfMultiples(number1, number2) {
  function getMultiples(num1, num2, arr) {
    if (num2 === 0) { return arr }
    if (arr.length === 0) {
        arr.push(num1)
    } else {
        arr.push(arr[arr.length - 1] + num1)
    }
    return getMultiples(num1, num2 - 1, arr)
  }

  return getMultiples(number1, number2, []);
}


const arrayOfMultiples = (num1, num2, arr = []) => {
  if (num2 === 0) { return arr }
  if (arr.length === 0) {
      arr.push(num1)
  } else {
      arr.push(arr[arr.length-1] + num1)
  }
  return arrayOfMultiples(num1, num2-1, arr)
};

