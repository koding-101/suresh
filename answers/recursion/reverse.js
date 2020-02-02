/* 
  Reverse a string
  Input: reverse("Recursion Sucks")
  Output: "skcuS noisruceR"
*/

const reverse = (str) => {
  if (str.length === 0) {
    return ""
  }

  return str[str.length - 1] + reverse(str.slice(0, -1)) //will alternative solution without using slice
}
