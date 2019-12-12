/*****************************************************************
//write a function that returns all odd numbers - [1,3,5]
//write a function that returns all even numbers -[2,4]
//write a function that returns the array backwards - [5,4,3,2,1];
/*****************************************************************/

const arr = [1,2,3,4,5];

//Return Odd Numbers
function oddNumbers(arr) {
    const oddArray = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i]%2 != 0) {
            oddArray.push(arr[i]);
        }
    }
    return oddArray;
}
console.log(oddNumbers(arr));

//Return Even Numbers
function evenNumbers(arr){
    const evenArray = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i]%2 == 0) {
            evenArray.push(arr[i]);
        }
    }
    return evenArray;
}
console.log(evenNumbers(arr));

//Return Reverse Array
function arrayBackward(arr){
    const revArray = [];
    for (let i=arr.length-1; i>=0; i--) {
        revArray.push(arr[i]);
    }
    return revArray;
}
console.log(arrayBackward(arr));
console.log("Array backward "+arrayBackward(arr)); //Returns only number without square brackets?????

/*******************************************************************************
//write a function that combines both arrays - [1,2,3,4,5,6,7,8,9,10]
//write a function that alternates items in each array - [1,6,2,7,3,8,4,9,5,10]
******************************************************************************/
const arr1 = [6,7,8,9,10];

const combineArray = (arr,arr1) => (arr.concat(arr1))
    //return newArray = arr.concat(arr1); //Is it correct???
//};
console.log(combineArray(arr,arr1));

/*** Use for Loop for combining arrays ***/
const combArray = (arr, arr1) => {

}

const alternateArray = (arr,arr1) => {
    let altArray = [];
    for (let i=0; i<arr.length; i++) {
        altArray = altArray.concat(arr[i], arr1[i]);
    }
    return altArray;
}
console.log("Alternate Array " +alternateArray(arr,arr1));

/**************************************************************
 * write a function that returns all even number - [2,8,10,6]
 * write a function that returns all odd numbers - [1,5]
 * **************************************************************/
const arr2 = [2,8,1,10,5,6];

const evenOddArrays = (arr, arraytype) => {
    const evenArray = [];
    const oddArray = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i]%2 == 0) {
            evenArray.push(arr[i]);
        } else {
            oddArray.push(arr[i]);
        }
    }
    if (arraytype === 'odd'){
        return oddArray;
    }
    else if (arraytype === 'even'){
        return evenArray;
    }
    else {
        return evenArray;
    }
};
console.log("Return Choice array " +evenOddArrays(arr2));

/**************************************************************
 * Using DO loop
 * write a function that returns all even number - [2,8,10,6]
 * write a function that returns all odd numbers - [1,5]
 * **************************************************************/
const evenArrayWithoutWhileOnly = arr => {
    const evenArray = [];
    let i=0;
    while (i<=arr.length){
        if (arr[i]%2 == 0) {
            evenArray.push(arr[i]);
        }
        i++;
    }
    return evenArray;
}
console.log("Using While loop without Do");
console.log(evenArrayWithoutWhileOnly(arr2));

/******* Do Loop - Even Array ********/
const evenArrayDoLoop = arr => {
    const evenArray = [];
    let i = 0;
    do {
        if (arr[i]%2 == 0) {
            evenArray.push(arr[i]);
        }
        i++;
    }
    while (i<=arr.length);
    return evenArray;
}
console.log("Using Do loop " +evenArrayDoLoop(arr2)); //Why does this not print in array format?
console.log(evenArrayDoLoop(arr2));

/******* Do Loop - Odd Array ********/
 const oddArrayDoLoop = arr => {
    const oddArray = [];
    let i = 0;
    do {
        if (arr[i]%2 != 0) {
            oddArray.push(arr[i]);
        }
        i++;
    }
    while (i<=arr.length); //Why does it return undefined here but not in evenDoLoop????
    return oddArray;
}
 console.log(oddArrayDoLoop(arr2));

var arr3 = [
    {type: "socks", quantity: 1},
    {type: "shoes", quantity: 3},
    {type: "pants", quantity: 1},
    {type: "socks", quantity: 5},
    {type: "shoes", quantity: 1},
    {type: "socks", quantity: 10}
];

/******* Write a function that returns the total quantity of the socks ****/
const totalSocks = arr => {
    let socks = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i].type === 'socks') {
            socks += arr[i].quantity;
        }
    }
    return socks;
}
console.log("Total socks " +totalSocks(arr3));

/***** Using forEach *****/
let totSocks = 0;
function getSocksCount(addSocks){
    arr3.forEach((addSocks) => {
        if (addSocks.type === 'socks') {
            totSocks += addSocks.quantity;
        }
    });
    return totSocks;
};
console.log("Total no. of socks using forEach function " +getSocksCount(arr3));

// let i=0 or i = 0 ????

var str = "supercalifragilisticexpialidocious";

/*** Write a function that returns the number of "a" in the str ***/
const retACount = str => {
    let aCount=0;
    for (let i=0; i<str.length; i++){
        if(str[i].indexOf('a') != -1){
            aCount += 1;
        }
    }
    return aCount;
}
console.log("A Count in For loop is " + retACount(str));

/*** Refactor to check any single character ***/
const retAnyCharCount = (str,ch) => {
    let anyCount=0;
    for (let i=0; i<str.length; i++){
        if(str[i].indexOf(ch) != -1){
            anyCount += 1;
        }
    }
    return anyCount;
}
console.log("Any Char Count in For loop is " + retAnyCharCount(str, 'i'));

/*** Do Loop for returning 'A' letters count ***/
const retACountDoLoop = str => {
    let aCount=0;
    let i=0;
    do {
        if(str[i].indexOf('a') != -1){
            aCount += 1;
        }
        i++;
    }
    while (i<str.length);
    return aCount;
}
console.log("A Count in Do loop is " + retACountDoLoop(str));

/*** Write a function that returns the number of vowels in the str ***/
const vowelCount = str => {
    let vowelCount=0;
    let vowelObj = 'aeiou';
    for (let i=0; i<str.length; i++){
        if(vowelObj.indexOf(str[i]) != -1){
            vowelCount += 1;
        }
    }
    return vowelCount;
}
console.log("Vowel Count in For loop is " +vowelCount(str));

/*** Do loop for vowel count ***/
const vowelCountDoLoop = str => {
    let countOfVowels=0;
    let i=0;
    do{
        if(`aeiou`.includes(str.charAt(i))){
            countOfVowels += 1;
        }
        i++;
    }
    while(i<str.length);
    return countOfVowels;
}
console.log("Vowel Count in Do Loop is \n" +vowelCountDoLoop(str));