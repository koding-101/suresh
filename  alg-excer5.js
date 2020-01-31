/*Today's problem: Create a function that returns true if the first array can be nested inside the second.
arr1 can be nested inside arr2 if:
1. arr1's min is greater than arr2's min.
2. arr1's max is less than arr2's max.
Examples
canNest([1, 2, 3, 4], [0, 6]) ➞ true
canNest([9, 9, 8], [8, 9]) ➞ false*/

const minOfArray = arr => {
  var minValue = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  return minValue;
}

const maxOfArray = arr => {
  var maxValue = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}

const canArrayNested = (arr1, arr2) => {
  return ((minOfArray(arr1) > minOfArray(arr2)) && (maxOfArray(arr1) < maxOfArray(arr2)));
}

const testArrayNested = (arr1, arr2, exp) => {
  if (canArrayNested(arr1, arr2) === exp) {
    console.log("arrays can be nested");
  } else {
    console.log("arrays can not be nested");
  }
}

testArrayNested([1, 2, 3, 4], [0, 6], true);
testArrayNested([3, 1], [4, 0], true);
testArrayNested([3, 9, 8, 6, 4], [3, 7], false);
testArrayNested([9, 2, 8], [7, 9], false);
testArrayNested([9, , 7, 6,], [3, 3, 4], false);
testArrayNested([4, 4], [2, 8], true);
testArrayNested([3], [2, 5], true);
testArrayNested([3], [3], false);
testArrayNested([-2], [0], false);
testArrayNested([-8, -3, -4], [-1, -9], true);
