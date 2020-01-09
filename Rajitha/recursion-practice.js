/****************************************************
* Create a function to get the factoral of a number.
* Input: factoral(5)  Output: 120
****************************************************/
var factorial = function(number) {
  if (number <= 0) {
    return 1;
  } else {
    return (number * factorial(number - 1));
  }
};
factorial(6);

/*********************************************************
* Create a function to get the power of a number.
* Multiply the first input x(second input) number of times
* Input: power(2, 5)
* Output: 32
* reason: 2x2x2x2x2
**********************************************************/
var numPower = function(num,exp) {
  if (exp === 0){
    return 1;
  } else {
    return num * numPower(num,exp-1);
  }
};
numPower(2,5);

/***************************************************
* Reverse a string
* Input: reverse("Recursion Sucks")
* Output: "skcuS noisruceR"
****************************************************/
const  reverseString = str => {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}
reverseString("This is big bucket");

/*************************************************************************
* Given an array of numbers, find the max sum using elements that are not
* adjacent to the previously included element.
* For example, if I decide to use the first element `1`, I cannot include
* the second element `2` as they  are adjacent.
* Input: maxSum([1,2,9,4,5,0,4,11,6])
* Output: 26
* Reason: Max sum formed by {1,9,5,11}
*************************************************************************/
//WIP