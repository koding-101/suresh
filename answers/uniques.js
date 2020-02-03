import { testArray } from "./helpers/test";

/* 1) Without using any built in functions, write a function to filter an array for unique values
Input: [1,1,2,3,5,7,7,9]
Output: [1,2,3,5,7,9] 

Assumptions
array values are strings and/or numbers
*/

function uniques(arr) {
  const addedItems = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    //store all found val in an object,
    //if value is in the object on the next iteration then
    //skip else add to array and object.
    const currentVal = arr[i];
    if (!addedItems[currentVal]) {
      addedItems[currentVal] = true;
      result.push(currentVal);
    }
  }
  return result;
}

const testUniques = (arr, expect) => testArray(uniques(arr), expect);
testUniques([], [])
testUniques([""], [""])
testUniques([" "], [" "])
testUniques(["a"], ["a"])
testUniques(["a","a"], ["a"])
testUniques([" ", "a", "a", ""], [" ","a",""])
testUniques(["a", "a", " "], ["a"," "])
testUniques(
  ["s", "u", "p", "e", "r", "c", "a", "l", "i", "f", "r", "a", "g", "i", "l", "i", "s", "t", "i", "c", "e", "x", "p", "i", "a", "l", "i", "d", "o", "c", "i", "o", "u", "s"], 
  ["s","u","p","e","r","c","a","l","i","f","g","t","x","d","o"]
)
testUniques([1], [1])
testUniques([1,2], [1,2])
testUniques([1,2,1], [1,2])
testUniques([1,2,1,2], [1,2])
testUniques([1,"a",1,2,1,2], [1,"a",2])