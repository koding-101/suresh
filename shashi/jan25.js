//Palindrome check

str = "Eva, can I see bees in a cave?"

const isPalindrome = str => {
  let strNew;
  if (typeof str === "number") {
    strNew = str.toString();
  }
  strNew = str.trim().replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  console.log("strNew", strNew);

  let strLen = Math.floor(strNew.length - 1 / 2);
  for (let i = 0; i < strLen; i++) {
    if (strNew[i] !== strNew[strNew.length - 1 - i]) {
      return false
    }
  }
  return true;
}

console.log(isPalindrome(str));