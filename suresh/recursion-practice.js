/* 1) Create a function to get the factoral of a number.
  Input: factoral(5)
  Output: 120 */
  
function factoral(no) {
  var j = 1;
  
  for (var i = 1; i <= no; i++) {
    j = j * i;
  }
  return(j);
}
 
console.log(factoral(4));
 
function factoral1(no) {
  if (no < 0) {
   return 'invalid number';
  } else if (no === 0 || no === 1) {
    return 1;
    } else {
      return no * factoral1(no-1);
      }
}

console.log(factoral1(6));
 
/* 2) Create a function to get the power of a number. Multiply the first input x(second input) number of times 
   Input: power(2, 5)
   Output: 32  
   reason: 2x2x2x2x2*/
 
function power(x, y) {
  if (x === 0 || y === 0) {
    return 0;
    } else if (x === 1 && y >1) {
      return y;
      } else if (x > 1 && y === 1) {
        return x;
        } else {
          return x * power(x, y-1);
          }
 }
 
 console.log(power(2, 5));

 /*3) Reverse a string
   Input: reverse("Recursion Sucks")
   Output: "skcuS noisruceR"*/
   
function reverse(str) {
  if (str === "") {
    return '';
  } else {
    return reverse(str.substr(1)) + str.charAt(0);
  }
}
 
console.log(reverse('Recursion Sucks'));
 
 
 /*4) Given an array of numbers, find the max sum using elements that are not adjacent to the previously included element.
 For example, if I decide to use the first element `1`, I cannot include the second element `2` as they  are adjacent.
   Input: maxSum([1,2,9,4,5,0,4,11,6])
   Output: 26
   Reason: Max sum formed by {1,9,5,11} */
   
var array11 = [1, 2, 9, 4, 5, 0, 4, 11, 6];
   
function maxSum(array11) {
  var incl = array11[0];
  var excl = 0;
  var excl1;
     
  for (var i = 0; i < array11.length; i++) {
    excl1 = (incl > excl) ? incl: excl;
       
    incl = excl + array11[i];
    excl = excl1;
  }
  return ((incl > excl) ? incl: excl);
}
    
console.log(maxSum(array11)); 

//refacoring code
 
if (options.editingSharedListId) {
 
  return dispatch(getList(authorizedListId || firstUsersListId, { toggleLoading: options.toggleLoading }));
} 
 