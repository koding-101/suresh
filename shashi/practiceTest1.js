//Without using any built in functions, write a function to filter an array for unique values
//Input: [1,1,2,3,5,7,7,9]
//Output: [1,2,3,5,7,9]

var input = [1, 1, 2, 3, 5, 7, 7, 9]

function checkValue(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
}

function uniqueValArr(arr1) {
  let newArr = [];
  let newArrIndex = 1;
  newArr[0] = arr1[0];
  for (var i = 1; i < arr1.length; i++) {
    if (!checkValue(newArr, arr1[i])) {
      newArr[newArrIndex] = arr1[i];
      newArrIndex++;
    }
  }
  return newArr;
}

console.log(uniqueValArr(input));

//2) Write a function to return all even numbers from a nested array.
//Input: [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]]
//Output: [2,4,6,8,10,12]

function checkEven(arr) {
  var newArr = [];
  var index = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr[index] = arr[i];
      index++;
    }
  }
  return newArr;
}

function returnAllEven(arr) {
  var finalArr = [];
  for (var i = 0; i < arr.length; i++) {
    var temp = checkEven(arr[i]);
    finalArr = finalArr.concat(temp);
  }
  return finalArr;
}
console.log(returnAllEven(input));

/*3) Write a function to take two parameters (rows, columns) and return a nested array where rows is the number of nested arrays 
and columns is the number of items in each nested array. The value within each nested array should alternate values of `X` and `O`
  Input: function(2, 4)
  Output: [[X,O,X,O], [X,O,X,O]]*/

function buildArray(columns) {
  var newArr = [];
  var n = 'X';
  for (var i = 0; i < columns; i++) {
    newArr.push(n);
    n === 'X' ? n = 'O' : n = 'X';
  }
  return newArr;
}


function nextedArray(rows, columns) {
  var finalArr = [];
  for (var i = 0; i < rows; i++) {
    finalArr.push(buildArray(columns));
  }
  return finalArr
}

console.log(nextedArray(3, 7));


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
function findPropInObj(obj, prop) {
  Object.keys(obj).forEach(key => {
    if (key === prop) {
      console.log(obj[key]);
    }
    if (typeof obj[key] === 'object') {
      findPropInObj(obj[key], prop);
    }
  })
}
findPropInObj(userProfile, "citiesLivedIn");

/*5) Write a function to add new details to `moreDetails` object. The function will accept two values (key, value).
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
        }*/

function addObjProp(key, value) {
  userProfile.additionalData.moreDetails[key] = value;
  return userProfile.additionalData.moreDetails;
}

console.log(addObjProp("isCool", true));