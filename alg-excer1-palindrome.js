function palindrome(input) {
  str = input.toString().toLowerCase();
  var strLength = str.length;

  for (var i = 0; i < strLength/2; i++) {
    if (str[i] !== str[strLength-1-i]) {
      return false;
    }
  }
  return true;
}

function checkPalindrome(palindrome) {

  if (palindrome) {
    console.log("Input value is palindrome")
  } else {
    console.log("Input value is not palindrome")
  }
}

checkPalindrome(palindrome("SA a"));

checkPalindrome(palindrome(345543));