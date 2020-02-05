import { testArray } from "./helpers/test.js";

//write a function that alternates items in each array - [1,6,2,7,3,8,4,9,5,10];
//inputs are arrays
function alternateArrays (array1, array2) {
  if (!array1.length) {
    return array2;
  }
  if (!array2.length) {
    return array1;
  }
  const result = [];
  const isArray1Shortest = array1.length <  array2.length;
  const shortestArraylength = isArray1Shortest ? array1.length :  array2.length;

  //add the shortest item's values into a new array.
  for (let i = 0; i < shortestArraylength; i++) {
    result.push(array1[i], array2[i])
  }

  //add the rest of the items from the longest array.
  if(isArray1Shortest) {
    for (let i = array1.length; i < array2.length; i++) {
      result.push(array2[i])
    }
  } else {
    for (let i = array2.length; i < array1.length; i++) {
      result.push(array1[i])
    }
  }
  return result;
}

const testAlternateArrays = (array1, array2, expect) => testArray(alternateArrays(array1, array2), expect);

testAlternateArrays([1,2,3], [4,5,6], [1,4,2,5,3,6])
testAlternateArrays([], [4,5,6], [4,5,6])
testAlternateArrays([1,2,3], [], [1,2,3])
testAlternateArrays([1,2,3,4,5,6,7], [8,9], [1,8,2,9,3,4,5,6,7])
testAlternateArrays([8,9], [1,2,3,4,5,6,7], [8,1,9,2,3,4,5,6,7])
testAlternateArrays(["B","G", "T","E"], ["I","", "O"], ["B","I","G","","T","O","E"])