/* 
  Create a function to get the factorial of a number.
  Input: factorial(5)
  Output: 120
*/

const factorial = (num) => {
  if (num === 0) {
      return 0
  }
  if (num === 1) {
      return 1
  }
  return num * factorial(num-1);
}