/****************************************************
* Create a function to get the factoral of a number.
* Input: factoral(5)  Output: 120
****************************************************/
let fact = 1;
const factorial = num => {
  if (num > 1) {
    fact = fact*num;
    num--;
    fact = factorial(num);
  }
  return fact;
};

console.log(factorial(7));

/*********************************************************
* Create a function to get the power of a number.
* Multiply the first input x(second input) number of times
* Input: power(2, 5)
* Output: 32
* reason: 2x2x2x2x2
**********************************************************/
let check = 1;
let result = 1;
const numPower = (num,exp) => {
  if (check <= exp){
    result = result * num;
    check++;
    result = numPower(num,exp);
  }
  return result;
}
console.log(numPower(2,5));

/***************************************************
* Reverse a string
* Input: reverse("Recursion Sucks")
* Output: "skcuS noisruceR"
****************************************************/
let revString = '';
const  reverseString = str => {
  if (str.length > 0) {
    revString = revString.concat(str.charAt(str.length - 1));
    revString = reverseString(str.slice(0,str.length-1));
  }
  return revString;
}
console.log(reverseString("Recursion Sucks"));

/*************************************************************************
* Given an array of numbers, find the max sum using elements that are not
* adjacent to the previously included element.
* For example, if I decide to use the first element `1`, I cannot include
* the second element `2` as they  are adjacent.
* Input: maxSum([1,2,9,4,5,0,4,11,6])
* Output: 26
* Reason: Max sum formed by {1,9,5,11}
*************************************************************************/
