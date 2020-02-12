// Create a function that takes in a sentence and a character to find. Return an object of each word in the sentence, with the count of the specified character as the value.
// Examples
// findOccurrences("Hello World", "o") ➞ {
//   "hello" : 1,
//   "world" : 1
// }
// findOccurrences("Create a nice JUICY function", "c") ➞  {
//   "create" : 1,
//   "a" : 0,
//   "nice" : 1,
//   "juicy" : 1,
//   "function" : 1
// }
// findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A") ➞ {
//   "an" : 1,
//   "apple" : 1,
//   "a" : 1,
//   "day" : 1,
//   "keeps" : 0,
//   "archeologist" : 1,
//   "away..." : 2
// }

const findOccurrences = (str, letter) => {
  var words = splitWords(str);
  return countLetter(words, letter);
}

// function to split string words to an array
const splitWords = (str) => {
  var wordsArr = [];
  var word = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      word += str[i];
    } else {
      wordsArr.push(word);
      word = "";
    }
  }
  wordsArr.push(word);
  return wordsArr;
}

//function to count the given letter in each array word and add the word and count to an object.
const countLetter = (words, letter)=> {
  var endObj = {};
  counter = 0;
  words.forEach(word => {
    for(let i =0; i<word.length; i++){
      if(word[i].toLowerCase() === letter.toLowerCase()){
        counter++;
      }
      endObj[word.toLowerCase()] = counter;
    }
    if(counter > 0){
      counter = 0;
    }
  })
  return endObj;
}


const testfindOccurrences= (inputStr, letter, output)=>{
  console.log(JSON.stringify(findOccurrences(inputStr, letter)) === JSON.stringify(output)? "Pass": "Fail"); 
}

testfindOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A",{
  "an" : 1,
  "apple" : 1,
  "a" : 1,
  "day" : 1,
  "keeps" : 0,
  "archeologist" : 1,
  "away..." : 2
} )
testfindOccurrences("Hello World", "o", {
   "hello" : 1,
   "world" : 1
})
testfindOccurrences("Create a nice JUICY function", "c", {
  "create" : 1,
  "a" : 0,
  "nice" : 1,
  "juicy" : 1,
  "function" : 1
})
testfindOccurrences("No matching letter in this", "x", {
  "no": 0,
  "matching": 0,
  "letter": 0,
  "in": 0,
  "this": 0
});

testfindOccurrences("", "p", {});
testfindOccurrences(" ", "s", {});