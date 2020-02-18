/****************************************************************************
 * Create a function that takes two strings and returns either true or false 
 * depending on whether they're anagrams or not.
 * Examples
 * isAnagram("cristian", "Cristina") ➞ true
 * isAnagram("Dave Barry", "Ray Adverb") ➞ true
 * isAnagram("Nope", "Note") ➞ false
 ****************************************************************************/
const isAnagram = (str, anagram) => {
  let strObj = {};
  let anagObj = {};
  str = str.toLowerCase();
  anagram = anagram.toLowerCase();

  if (str.length === anagram.length) {
    strObj = checkChars(str);
    anagObj = checkChars(anagram);
  }
  return (compareObj(strObj, anagObj));
}

const checkChars = (str) => {
  let strCnt = str.length;
  let index = 0;
  let count = 0;
  let strOccurance = 0;
  let strExists;
  let obj = {};

    do {  
      if (!obj.hasOwnProperty(str[index])){  
        strExists = str.indexOf(str[index]);
        while (strExists > -1 ) {   
          strOccurance++;
          count = strExists + 1;          
          strExists = str.indexOf(str[index], count);
        }    
        obj[str[index]] = strOccurance;  
      index++;
      count = 0;
      strOccurance = 0;
      } else {
        index++;
      }
    } while (index !== strCnt);  
 return obj;
}

const compareObj = (obj1, obj2) => {
  let result;  
  for (let prop in obj1) {
	//Check property exists on both objects and values are equal
	if ((obj1.hasOwnProperty(prop) !== obj2.hasOwnProperty(prop)) && (obj1[prop] !== obj2[prop])){
      return false;
    }
  }
  return true;
}

const testAnagram = (str, anagram, expected) => {
  if(isAnagram("cristian", "Cristina") === expected){
      console.log("You got it...")
  } else {
      console.log("Nooo.It's a miss...")
  }
}

testAnagram("cristian", "Cristina", true); 
testAnagram("Dave Barry", "Ray Adverb", true);
testAnagram("Nope", "Note", false);
testAnagram("Listen Trianlge", "Integral Silent", true);
testAnagram("123HenRy$", "$H1en2Ry3", true);
testAnagram("Can you check", "Nac Uoy Chek", false);