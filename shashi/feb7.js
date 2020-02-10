// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.
// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
// Notes
// Notice that num is also included in the returned array

const arrayOfMultiples = (num, len) => {
  var outputArr = [];
  if (len <= 0) {
    return outputArr;
  }
  for (let i = 1; i <= len; i++) {
    outputArr.push(num * i);
  }
  return outputArr;
}

const testArrayOfMultiples = (fn, num, len, expected) => {
  console.log(JSON.stringify(fn(num, len)) === JSON.stringify(expected) ? "pass" : "fail");
}

testArrayOfMultiples(arrayOfMultiples, 7, 5, [7, 14, 21, 28, 35]);
testArrayOfMultiples(arrayOfMultiples,12, 10, [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]);
testArrayOfMultiples(arrayOfMultiples,17, 6, [17, 34, 51, 68, 85, 102]);
testArrayOfMultiples(arrayOfMultiples, 1.5, 7, [1.5, 3, 4.5, 6, 7.5, 9, 10.5]);
testArrayOfMultiples(arrayOfMultiples, -1, 9, [-1, -2, -3, -4, -5, -6, -7, -8, -9]);
testArrayOfMultiples(arrayOfMultiples, 0, 3, [0, 0, 0]);
testArrayOfMultiples(arrayOfMultiples, 3, 0, []);
testArrayOfMultiples(arrayOfMultiples, 3, -3, []);
testArrayOfMultiples(arrayOfMultiples, 0, 0, []);

