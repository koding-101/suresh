/***************************************************
 * Determine whether a given input is a palindrome.
 ***************************************************/
const palindrome = inputQuery => {
  var query = '';
  var count = 0;
  
  //If number convert to string
  if (typeof inputQuery === "number"){
    inputQuery = inputQuery.toString();
  }
  count = inputQuery.length;

  //Convert string to lower case and remove special characters/empty spaces
  inputQuery = inputQuery.toLowerCase().replace(/\W|_/g, "");
  
  //Iterate and store characters starting from end
  //Compare final value with input
  for (var i = count-1; i >= 0; i--){
    query += inputQuery.charAt(i);
  }
  return((query === inputQuery)? true : false);
}

//Function to call main function and test different cases
const testPalindrome = (fn, query, expect) => {
  const result = fn(query);
  console.log((result === expect)? true : false); 
}

//Call tester function with test cases and expected result
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