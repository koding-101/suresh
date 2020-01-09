/* 1) Without using any built in functions, write a function to filter an array for unique values
Input: [1,1,2,3,5,7,7,9]
Output: [1,2,3,5,7,9] */

var inputArray = [1,1,2,3,5,7,7,9];

function uniqueArray(arr) {
  var uniqueArr = [];
    
  for (var i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
  
console.log('unique numbers: ' + uniqueArray(inputArray));
  
/* 2) Write a function to return all even numbers from a nested array.
Input: [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]]
Output: [2,4,6,8,10,12] */
    
var  nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];
  
var evenNos = array => {
  var evenNo = [];
    
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array[i].length; j++) {
      if (array[i][j] && array[i][j] % 2 === 0) {
        evenNo.push(array[i][j]);
      }
    }
  }
  return evenNo;
}
  
console.log('Even nos: ' + evenNos(nestedArray));
  
/* 3) Write a function to take two parameters (rows, columns) and return a nested array where rows is the number of nested arrays 
and columns is the number of items in each nested array. The value within each nested array should alternate values of `X` and `O`
Input: function(2, 4)
Output: [[X,O,X,O], [X,O,X,O]] */
  
var nestedArrayWithRowCol = (row, col) => {
  var nestedArr= [];
  
  for (var i = 0; i < row; i++) {
    var tempArray = [];

    for (var j = 0; j < col; j++) {
      if (j % 2 === 0) {
        tempArray.push('X');
      } else {
        tempArray.push('O');
      }
    }
    nestedArr.push(tempArray);
  }
  return nestedArr;
}
  
console.log(nestedArrayWithRowCol(3,4))
  
var userProfile = {
  name: "Bob",
  additionalData: {
    occupation: "Dev",
    favoriteHobbies: ["Eating", "Coding", "Sleeping"],
    moreDetails: {
      favoriteBasketballTeam: "Warriors",
      numberOfSiblings: 2,
      isYoungest: true,
      hometown: {
        city: "San Jose",
        state: "CA",
      },
      citiesLivedIn: ["SF", "Portland", "New York"]
    }
  }
};
  
/* 4) Given `userProfile` write a function to return a value from within userProfile
Input: function(citiesLivedIn)
Output: ["SF", "Portland", "New York"]
*/

//using destructure 
var {additionalData: {moreDetails: {citiesLivedIn: citiesLivedIn ='inValid key'}}} = userProfile;
  
console.log(citiesLivedIn);

function findPropValueInObj(obj, prop) {
  Object.keys(obj).forEach(key => {
    if (key === prop) {
      console.log(obj[key]);
    }
    if (typeof obj[key] === 'object') {
      findPropValueInObj(obj[key], prop);
    }
  })
}

findPropValueInObj(userProfile, "citiesLivedIn");
  
/* 5) Write a function to add new details to `moreDetails` object. The function will accept two values (key, value). 
The function will return the `moreDetails` object.
Input: function("isCool", true)
Output: {
  favoriteBasketballTeam: "Warriors",
  numberOfSiblings: 2,
  isYoungest: true,
  hometown: {
    city: "San Jose",
    state: "CA",
  },
  citiesLivedIn: ["SF", "Portland", "New York"],
  isCool: true
  } */

function addObjPropValues(obj,  prop, keyName,  value) {
  Object.keys(obj).forEach(key => {
    if(key === prop){
      obj[key][keyName] = value;
      console.log(obj[key]);
    }
    if (typeof obj[key] === 'object') {
      addObjPropValues(obj[key], prop, keyName, value)
    }
  })
}

addObjPropValues(userProfile,'moreDetails','isCool','true');
