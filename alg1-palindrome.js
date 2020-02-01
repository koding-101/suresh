/*Determine whether a given input is a palindrome. For ex: An integer is a palindrome when it reads the same backward as forward.*/

function palindrome(input) {
  var regExp = /[^A-Za-z0-9]/g;
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

checkPalindrome(palindrome("mom"));
checkPalindrome(palindrome("I did, did I"));
checkPalindrome(palindrome("Step on no pets"));
checkPalindrome(palindrome("S!A a!s"));
checkPalindrome(palindrome("No lemon, no melon"));
checkPalindrome(palindrome(345543));
checkPalindrome(palindrome("7/17/17"));
checkPalindrome(palindrome("not a palindrome"));
checkPalindrome(palindrome("A"));
checkPalindrome(palindrome(0));
checkPalindrome(palindrome(1232));
checkPalindrome(palindrome("My age is 0, 0 si ega ym"));
