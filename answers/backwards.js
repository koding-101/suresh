import { testArray } from "./helpers/test.js";

//write a function that returns the array backwards - [5,4,3,2,1];
function backwards (array) {
  const result = [];
  for (let i = array.length-1; i >= 0; i--) {
    result.push(array[i])
  }
  return result;
}

const testBackwards = (array, expect) => testArray(backwards(array), expect);
testBackwards([1,2,3,4,5], [5,4,3,2,1]);
testBackwards([1], [1]);
testBackwards([], []);
testBackwards(["p","o","o","P"], ["P","o","o","p"]);
testBackwards([1,"","   ","a"], ["a","   ","", 1]);