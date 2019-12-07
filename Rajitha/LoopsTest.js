/*****************************************************************
//write a function that returns all odd numbers - [1,3,5]
//write a function that returns all even numbers -[2,4]
//write a function that returns the array backwards - [5,4,3,2,1];
/*****************************************************************/

const arr = [1,2,3,4,5];

//Return Odd Numbers
function oddNumbers(arr) {
    let oddArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            oddArray.push(arr[i]);
        }
    }
    return oddArray;
}
console.log(oddNumbers(arr));

//Return Even Numbers
function evenNumbers(arr){
    let evenArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenArray.push(arr[i]);
        }
    }
    return evenArray;
}
console.log(evenNumbers(arr));

//Return Reverse Array
function arrayBackward(arr){
    let revArray = [];
    for (let i=arr.length-1; i>=0; i--) {
        revArray.push(arr[i]);
    }
    return revArray;
}
console.log(arrayBackward(arr));

/*******************************************************************************
//write a function that combines both arrays - [1,2,3,4,5,6,7,8,9,10]
//write a function that alternates items in each array - [1,6,2,7,3,8,4,9,5,10]
******************************************************************************/
const arr1 = [6,7,8,9,10];

const combineArray = (arr,arr1) => (arr.concat(arr1))
    //return newArray = arr.concat(arr1); //Is it correct???
//};
console.log(combineArray(arr,arr1));

const alternateArray = (arr,arr1) => {
    let altArray = [];
    for (let i = 0; i < arr.length; i++) {
        altArray = altArray.concat(arr[i], arr1[i]);
    }
    return altArray;
}
console.log(alternateArray(arr,arr1));

/**************************************************************
 * write a function that returns all even number - [2,8,10,6]
 * write a function that returns all odd numbers - [1,5]
 * **************************************************************/
const arr2 = [2,8,1,10,5,6];

const evenOddArrays = arr => {
    let evenArray = [];
    let oddArray = [];
    for (let i=0; i<arr.length; i++){
        if(arr[i] % 2 ==0){
            evenArray.push(arr[i]);
        }
        else {
            oddArray.push(arr[i]);
        }
    }
    console.log(evenArray);
    console.log(oddArray);
    return [evenArray, oddArray];
};

console.log(evenOddArrays(arr2)); //is there a way to return two arrays in a single function? multi-dimensinal array?