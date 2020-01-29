/*****************************************************************************************
 * Create a function that takes a string and returns a new string with all vowels removed.
 * Example :removeVowels("I have never seen a thin person drinking Diet Coke.")
 *          output: " hv nvr sn  thn prsn drnkng Dt Ck." 
 *****************************************************************************************/
// Assumptions:
// No numbers
// No special characters
// May have upper/lower case
const removeVowels = str => {
  let outputStr = "";
  let vowelStr = "aeiou";
  
  for (let i = 0; i < str.length; i++){
    if (vowelStr.indexOf(str[i].toLowerCase()) === -1){
      outputStr += str[i];
    }
  }
  return outputStr;
}

const testremoveVowels = (str, expected) => {
  return(removeVowels(str) === expected);
}
console.log(testremoveVowels("I have neVer seen a thiN person drinking Diet Coke." , " hv nVr sn  thN prsn drnkng Dt Ck."));
console.log(testremoveVowels("Aeiou are vowels" , " r vwls"));
console.log(testremoveVowels("Quick" , "Qck"));
console.log(testremoveVowels("THIS IS GOOD" , "THS S GD"));

// Without indexOf
const removeStrVowels = str => {
    let outputStr = "";
    let vowelStr = "aeiou";
    let checkChar;
    
    for (let i = 0; i < str.length; i++){
      checkChar = str[i].toLowerCase();
      if ((checkChar !== "a") && (checkChar !== "e") && (checkChar !== "i") && (checkChar !== "o")  && (checkChar !== "u")){
        outputStr += str[i];
      }
    }
    return outputStr;
  }
  
  const testremoveStrVowels = (str, expected) => {
    return(removeStrVowels(str) === expected);
  }
  console.log("Without indexOf");
  console.log(testremoveStrVowels("I have neVer seen a thiN person drinking Diet Coke." , " hv nVr sn  thN prsn drnkng Dt Ck."));
  console.log(testremoveStrVowels("Aeiou are vowels" , " r vwls"));
  console.log(testremoveStrVowels("Quick" , "Qck"));
  console.log(testremoveStrVowels("THIS IS GOOD" , "THS S GD"));