/***************************************************
 * Determine whether a given input is a palindrome.
 ***************************************************/
const palindrome = inputQuery => {

  //If number convert to string
  if (typeof inputQuery === "number"){
    inputQuery = inputQuery.toString();
  }
  else {
    inputQuery = inputQuery.toLowerCase().replace(/\W|_/g, "");   
  }
  let count = inputQuery.length;
  let midStrLen = (count - 1) / 2;

  for (var i = 0; i <= midStrLen; i++){
    if (inputQuery[i] !== inputQuery[count-1-i]){
      return false;  
    }
  }
  return true;
}

//Function to call main function and test different cases
const testPalindrome = (fn, query, expect) => {
  const result = fn(query);
  console.log((result === expect)? true : false); 
}

//Call tester function with test cases and expected result
testPalindrome(palindrome, "AABBAA", true);
testPalindrome(palindrome, "AABAA", true);
testPalindrome(palindrome, "A", true);
testPalindrome(palindrome, 12*21, true);
testPalindrome(palindrome, 1234321, true);
testPalindrome(palindrome, "Trurt", true);
testPalindrome(palindrome, "A man, a plan, a canal. Panama", true);
testPalindrome(palindrome, "race car", true);
testPalindrome(palindrome, "not a palindrome", false);
testPalindrome(palindrome, "almostomla", false);
testPalindrome(palindrome, "My age is 0, 0 si ega ym.", true);
testPalindrome(palindrome, "1 eye for of 1 eye.", false);
testPalindrome(palindrome, "almostomla", false);
testPalindrome(palindrome, "madam", true);
testPalindrome(palindrome, " ", true);