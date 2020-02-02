/* 
  Create a function to get the power of a number. Multiply the first input x(second input) number of times 
  Input: power(2, 5)
  Output: 32  
  reason: 2x2x2x2x2
*/

const power = (num, pow) => {
  if (pow === 0) {
      return 0
  }
  if (pow === 1) {
      return num
  }
  return num * (power(num, pow-1))
}
