/*******************************************************************
 * Create a function that takes a word, number of consecutives and 
 * returns true if the word has number of consecutive identical 
 * letters.
 * Examples
 * doubleLetters("loop", 2) ➞ true
 * doubleLetters("yummy", 3) ➞ false
 * doubleLetters("yummmy", 3) ➞ true
 * doubleLetters("orange") ➞ false
 * doubleLetters("munchkin") ➞ false 
 ******************************************************************/
const duplicateLetters = (str, cnt) => {
  let inStr = str;
  let dupCnt = 1;
  
  for (let i = 0; i < inStr.length; i++){
    if (inStr[i] === inStr[i+1]){
      dupCnt += 1;
      if (dupCnt >= cnt) {
        return true;
      }  
    }
    else {
      dupCnt = 1;
    }
  }
  return false;
}

console.log(duplicateLetters("ooop", 2));
console.log(duplicateLetters("yummy", 3));
console.log(duplicateLetters("yummmy", 3));
console.log(duplicateLetters("orange"));
console.log(duplicateLetters("this is biiig book", 2));
console.log(duplicateLetters("this is biiig book", 3));
console.log(duplicateLetters("this is biiig booook", 4));