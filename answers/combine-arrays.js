import { testArray } from "./helpers/test.js";

//write a function that combines both arrays - [1,2,3,4,5,6,7,8,9,10]
//inputs are arrays;
function combineArrays (array1, array2) {
  const combinedArrays = [];
  function combiner(arr) {
    for (let i = 0; i < arr.length; i++) {
      combinedArrays.push(arr[i])
    }
  }
  combiner(array1);
  combiner(array2);
  return combinedArrays;
}

const testCombineArrays = (array1, array2, expect) => testArray(combineArrays(array1, array2), expect);
testCombineArrays([1], [2], [1,2])
testCombineArrays([], [2], [2])
testCombineArrays([1], [], [1])
testCombineArrays([1,2,3], [4], [1,2,3,4])
testCombineArrays([1], [2,3,4], [1,2,3,4])
testCombineArrays([1,2], [3,4], [1,2,3,4])
testCombineArrays([1,2], [3,4,5], [1,2,3,4,5])

//-------------------------------------------//
// ---- Option 2 combine > 2 arrays---- //
//-------------------------------------------//

function combineArrays2 () {
  const combinedArrays = [];
  function combiner(arr) {
    for (let i = 0; i < arr.length; i++) {
      combinedArrays.push(arr[i])
    }
  }

  for (let i = 0; i < arguments.length; i++) {
    combiner(arguments[i]);
  }

  return combinedArrays;
}

const testCombineArrays2 = (arrays, expect) => testArray(combineArrays2(...arrays), expect);
testCombineArrays2([[1], [2]], [1,2])
testCombineArrays2([[], [2]], [2])
testCombineArrays2([[1], []], [1])
testCombineArrays2([[1,2,3], [4]], [1,2,3,4])
testCombineArrays2([[1], [2,3,4]], [1,2,3,4])
testCombineArrays2([[1,2], [3,4]], [1,2,3,4])
testCombineArrays2([[1,2], [3,4,5]], [1,2,3,4,5])
testCombineArrays2([[1], [2], [3], [4], [5], [6], [7]], [1,2,3,4,5,6,7])
testCombineArrays2([[1,2,3,4,5], ["a","b","c"], [], [], [-1,-100, 10], []], [1,2,3,4,5,"a","b","c",-1,-100, 10])