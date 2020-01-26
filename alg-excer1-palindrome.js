function palindrome(input) {
  var regExp = /[^A-za-z0-9]/g;
  var str = input.toString().toLowerCase().replace(regExp,"");
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

checkPalindrome(palindrome("S!A a!s"));

checkPalindrome(palindrome(345543));
