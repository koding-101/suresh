// Swapping Two by Two
// Write a function that swaps the first pair (1st and 2nd characters) with the second pair (3rd and 4th characters) for every quadruplet substring.
// Examples
// swapTwo("ABCDEFGH") ➞ "CDABGHEF"
// swapTwo("AABBCCDDEEFF") ➞ "BBAADDCCFFEE"
// swapTwo("munchkins") ➞ "ncmuinhks"
// swapTwo("FFGGHHI") ➞ "GGFFHHI"
// Notes
// Keep leftover strings in the same order.

const swapTwo = (string) => {
  var newStr = "";
  var remChars = string.length % 4;
  for(let i=0;i<(string.length - remChars);i+=4){
    newStr+=string[i+2]+string[i+3]+string[i]+string[i+1];
  }
  if(remChars!== 0) {
  for(let i=string.length - remChars; i< string.length; i++){
    newStr+=string[i];
  }
}
  return newStr;
}

const testswapTwo = (input, output) => {
  console.log(swapTwo(input)=== output? "Pass":"fail");
}

testswapTwo("ABCDEFGH", "CDABGHEF");
testswapTwo("AABBCCDDEEFF", "BBAADDCCFFEE");
testswapTwo("munchkins","ncmuinhks");
testswapTwo(" ", " ");
testswapTwo("", "");
testswapTwo("#$&%**", "&%#$**");
testswapTwo("this is swapping string", "isths  iapswngpitr sing");
testswapTwo("ABC", "ABC");
testswapTwo("CDEF", "EFCD");