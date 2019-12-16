/*********************************************************************
* Without using any built in functions, write a function to filter an
* array for unique values
* Input: [1,1,2,3,5,7,7,9]
* Output: [1,2,3,5,7,9]
**********************************************************************/
// Using For loop
const getUniqueArray = (arr) => {
  let newArray = [];
  let dupArray = [];
  for (let i = 0; i <= arr.length; i++){
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] == arr[j]) {
        dupArray.push(arr[i]);
        newArray.push(arr[i]);
      }
      else if (dupArray.indexOf(arr[i]) != -1) {
        break;
      }
      else {
        newArray.push(arr[i]);
        break;
      }
    }
  }
  return newArray;
}
console.log(getUniqueArray([1,1,2,3,5,7,7,9]));

//Using While loop
const uniqueArray = (arr) => {
    let newArray = [];
    let dupArray = [];
    let i = 0;
    while(i < arr.length){
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] == arr[j]) {
                dupArray.push(arr[i]);
                newArray.push(arr[i]);
                i += 1;
            }
            else{
                if (dupArray.indexOf(arr[i]) != -1) {
                    i++;
                }
                else {
                    newArray.push(arr[i]);
                    i++;
                }
            }
        }
    }
    return newArray;
}
console.log(uniqueArray([1,1,2,3,5,7,7,9]));

/*********************************************************************
* Write a function to return all even numbers from a nested array.
* Input: [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]]
* Output: [2,4,6,8,10,12]
**********************************************************************/
 const getEvenArray = (arr) => {
  let evenArray = [];
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
      if(arr[i][j] % 2 == 0){
        evenArray.push(arr[i][j]);
      }
    }
  }
  return evenArray;
}
console.log(getEvenArray([[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]]));

/******************************************************************************
* Write a function to take two parameters (rows, columns) and return a nested
* array where rows is the number of nested arrays and columns is the number of
* items in each nested array. The value within each nested array should
* alternate values of `X` and `O`
Input: function(2, 4)
Output: [[X,O,X,O], [X,O,X,O]]
******************************************************************************/
let nestedArray = [];
const createNestedArray = (row, column) => {
  let tempArray = [];
  for (let i = 0; i < row; i++){
    for (let j = 0; j < column; j++){
      if(j % 2 == 0){
        tempArray.push('X');
      }
      else {
          tempArray.push('O');
      }
    }
    nestedArray.push(tempArray);
    tempArray = [];
  }
  return nestedArray;
}
console.log(createNestedArray(4,5));

/*******************************************************************************
* Given `userProfile` write a function to return a value from within userProfile
* Input: function(citiesLivedIn)
* Output: ["SF", "Portland", "New York"]
********************************************************************************/
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

/**********************************************************************************
* Given `userProfile` write a function to return a value from within userProfile
* Input: function(citiesLivedIn)
* Output: ["SF", "Portland", "New York"]
***********************************************************************************/
const displayUserSelection = (obj,prop) => {
   Object.keys(obj).forEach(key => {
     if(key === prop){
       console.log(obj[key]);
     }
     if (typeof obj[key] === 'object') {
       displayUserSelection(obj[key],prop)
     }
   })
};
displayUserSelection(userProfile, 'citiesLivedIn');

/**********************************************************************************
* Write a function to add new details to `moreDetails` object. The function will
* accept two values (key, value).The function will return the `moreDetails` object.
***********************************************************************************/
const addUserDetails = (obj,parentProp,prop,value) => {
    Object.keys(obj).forEach(key => {
        if(key === parentProp){
            obj[key][prop] = value;
            console.log(obj[key]);
        }
        if (typeof obj[key] === 'object') {
            addUserDetails(obj[key],parentProp,prop,value)
        }
    })
};
addUserDetails(userProfile,'moreDetails','isCool','true');