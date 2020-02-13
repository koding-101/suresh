/****************************************************************************************
 * Create a function that takes in a sentence and a character to find. Return an object 
 * of each word in the sentence, with the count of the specified character as the value.
 *
 * findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A") ➞ {
  "an" : 1,
  "apple" : 1,
  "a" : 1,
  "day" : 1,
  "keeps" : 0,
  "archeologist" : 1,
  "away..." : 2
}
 ****************************************************************************************/
const matchWord = (str, letter) => {
  let cnt = 0;
  let tempWord = "";  
  let obj = {};

  for (let i = 0; i <= str.length; i++){
    if((str[i] !== " ") && (i !== str.length)){
      tempWord += str[i].toLowerCase();
      if (str[i].toLowerCase() === letter.toLowerCase()){
        cnt++;
      }  
    }
    else  {
    obj[tempWord] = cnt;
    tempWord = "";
    cnt = 0;
    }
  }
  return JSON.stringify(obj);
}

const testmatchWord = (str, letter, expected) => {
  if (Object.is(matchWord(str, letter), JSON.stringify(expected))) {
    console.log("Good...");
  }
  else{
    console.log("Baaaad...");
  }
}

testmatchWord("An APPLE a day keeps an Archeologist AWAY...", "A", {"an":1,"apple":1,"a":1,"day":1,"keeps":0,"archeologist":1,"away...":2});
testmatchWord("Hello World", "o", {"hello":1,"world":1});
testmatchWord("Hi T Tthere", "t", {"hi":0,"t":1,"tthere":2});
testmatchWord("Hi 123$   H R U", "H", {"hi":1,"123$":0,"":0,"h":1,"r":0,"u":0});