// Today's problem: Create a function that returns true if the first array can be nested inside the second.
// arr1 can be nested inside arr2 if:
// 1. arr1's min is greater than arr2's min.
// 2. arr1's max is less than arr2's max.
// Assumptions:
// input has to be arrays
// Arrays cannot be empty
// Arrays should have numeric values


///using reduce
function maxArrValue(arr) {
  return max = arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
}

function minArrValue(arr) {
  return max = arr.reduce(function (a, b) {
    return Math.min(a, b);
  });
}

function canNestReduce(arr1, arr2) {
  if (minArrValue(arr1) > minArrValue(arr2) && maxArrValue(arr1) < maxArrValue(arr2)) {
    return true;
  }
  return false;
}

// using Math.max & Math.min
function canNest(arr1, arr2) {
  if (Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2)) {
    return true;
  }
  return false;
}

function testCanNest(fn, arr1, arr2, expected) {
  fn(arr1, arr2) === expected ? console.log(`canNest check success`) : console.log(`canNest check failed`);
}

testCanNest(canNestReduce, [1, 2, 3, 4], [0, 6], true);
testCanNest(canNestReduce, [3, 1], [4, 0], true);
testCanNest(canNestReduce, [9, 9, 8], [8, 9], false);
testCanNest(canNestReduce, [1, 2, 3, 4], [2, 3], false);
testCanNest(canNestReduce, [1, 2, 3, 4, 5, 6, 6, 7], [2, 6, 4, 6, 7], false);
testCanNest(canNestReduce, [0], [0, 0], false);
testCanNest(canNestReduce, [1], [1], false);
testCanNest(canNestReduce, [5, 9], [3, 13], true);
testCanNest(canNestReduce, [-1], [0], false);
testCanNest(canNestReduce, [-8, -13], [-5, -19], true );


testCanNest(canNest, [1, 2, 3, 4], [0, 6], true);
testCanNest(canNest, [3, 1], [4, 0], true);
testCanNest(canNest, [9, 9, 8], [8, 9], false);
testCanNest(canNest, [1, 2, 3, 4], [2, 3], false);
testCanNest(canNest, [1, 2, 3, 4, 5, 6, 6, 7], [2, 6, 4, 6, 7], false);
testCanNest(canNest, [0], [0, 0], false);
testCanNest(canNest, [1], [1], false);
testCanNest(canNest, [5, 9], [3, 13], true);
testCanNest(canNest, [-1], [0], false);
testCanNest(canNest, [-8, -13], [-5, -19], true );
