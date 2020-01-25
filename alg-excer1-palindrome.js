function palindrome(input) {
  str =  input.toString().toLowerCase();
  var strLength= str.length;

  for (var i=0; i<strLength/2; i++) {
    if (str[i] !== str[strLength-1-i]) {
      return input + "- is not Palindrome";
    }
  }
  return input + "- is Palindrome";
}

console.log(palindrome("SA as"));

console.log(palindrome("345543"));