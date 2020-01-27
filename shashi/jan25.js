
const isPalindrome = str => {
  let strNew;
  if (typeof str === "number") {
    strNew = str.toString();
  }
  if (str.length === 1 || str.length === "" || str === " ") {
    return -1;
  }
  strNew = (str.split(" ")).join("").toLowerCase();

  let strLen = Math.floor(strNew.length - 1 / 2);
  for (let i = 0; i < strLen; i++) {
    if (strNew[i] !== strNew[strNew.length - 1 - i]) {
      return false
    }
  }
  return true;
}

//object with Palindrome data
var palindromeData = {
  "Repaper": true,
  "Red rum sir is murder": true,
  "madam": true,
  1234567654321: true,
  12341234: false,
  "not a plaindrome": false,
  "a": -1,
  1: -1,
  " ": -1
};

//function that checks if given string is palindrome or not
const verifyPalindrome = (fn, obj) => {
  for (let str in obj) {
    console.log("String is", str);
    let palindromeCheck = fn(str);
    console.log("palindromeCheck is", palindromeCheck);
    if (palindromeCheck == obj[str]) {
      console.log("palindrome check success");
    } else {
      console.log("palindrome check failed");
    }
  }
}

verifyPalindrome(isPalindrome, palindromeData);
