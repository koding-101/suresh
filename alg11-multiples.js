/*Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.
Examples
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
Notes
Notice that num is also included in the returned array*/

const arrayOfMultiples = (num, len) => {
  var multiples = [];

  if (num === 0 || len === 0) {
    return multiples
  }

  for (var i = 1; i <= len; i++) {
  	multiples.push(num * i)
  }
  return multiples;
}

function testArrayOfMultiples(num, len, exp) {
  if (JSON.stringify(arrayOfMultiples(num, len)) === JSON.stringify(exp)) {
    console.log("PASS 👍");
  } else {
    console.log("Fail 😢");
  }
}

testArrayOfMultiples(7, 5, [7, 14, 21, 28, 35]);
testArrayOfMultiples(12, 10, [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]);
testArrayOfMultiples(17, 6, [17, 34, 51, 68, 85, 102]);
testArrayOfMultiples(7, 1, [7]);
testArrayOfMultiples(7, 0, []);
testArrayOfMultiples(0, 5, []);
