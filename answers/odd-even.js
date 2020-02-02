import { testArray } from "./helpers/test";

//write a function that returns all odd numbers - [1,5]
//values will always be numbers.
function getOddNums (array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const currentVal = array[i];
    if(currentVal % 2){
      result.push(currentVal);
    }
  }
  return result;
} 
const getOddNumsTest = (array, expect) => testArray(getOddNums(array), expect);
getOddNumsTest([1,2,3,4,5,6], [1,3,5])
getOddNumsTest([6,5,4,3,2,1], [5,3,1])
getOddNumsTest([3,3,3,3,3], [3,3,3,3,3])
getOddNumsTest([2,2,2,2,2,2], [])
getOddNumsTest([0,0,0], [])
getOddNumsTest([1], [1])
getOddNumsTest([2], [])
getOddNumsTest([0], [])


//write a function that returns all odd numbers - [1,5]
//values will always be numbers.
function getEvenNums (array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const currentVal = array[i];
    if(!(currentVal % 2)){
      result.push(currentVal);
    }
  }
  return result;
} 

const getEvenNumsTest = (array, expect) => testArray(getEvenNums(array), expect);
getEvenNumsTest([1,2,3,4,5,6], [2,4,6])
getEvenNumsTest([6,5,4,3,2,1], [6,4,2])
getEvenNumsTest([3,3,3,3,3], [])
getEvenNumsTest([2,2,2,2,2,2], [2,2,2,2,2,2])
getEvenNumsTest([0,0,0], [0,0,0])
getEvenNumsTest([1], [])
getEvenNumsTest([2], [2])
getEvenNumsTest([0], [0])

//-------------------------------------------//
// ---- Option 2 using call backs------ //
//-------------------------------------------//
function arrayAnswer (array, fn) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const currentVal = array[i];
    if(fn(currentVal)){
      result.push(currentVal);
    }
  }
  return result;
} 
const isOddFn = currentVal => !!(currentVal % 2);
const isEvenFn = currentVal => !(currentVal % 2);

const oddTest = (array, expect) => testArray(arrayAnswer(array, isOddFn), expect);
oddTest([1,2,3,4,5,6], [1,3,5])
oddTest([6,5,4,3,2,1], [5,3,1])
oddTest([3,3,3,3,3], [3,3,3,3,3])
oddTest([2,2,2,2,2,2], [])
oddTest([0,0,0], [])
oddTest([1], [1])
oddTest([2], [])
oddTest([0], [])

const evenTest = (array, expect) => testArray(arrayAnswer(array, isEvenFn), expect);
evenTest([1,2,3,4,5,6], [2,4,6])
evenTest([6,5,4,3,2,1], [6,4,2])
evenTest([3,3,3,3,3], [])
evenTest([2,2,2,2,2,2], [2,2,2,2,2,2])
evenTest([0,0,0], [0,0,0])
evenTest([1], [])
evenTest([2], [2])
evenTest([0], [0])