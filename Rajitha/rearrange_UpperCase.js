/*********************************************************************
* Create a function that moves all capital letters to the front of a word.
* Examples
* capToFront("hApPy") ➞ "APhpy"
* capToFront("moveMENT") ➞ "MENTmove"
* capToFront("shOrtCAKE") ➞ "OCAKEshrt"
**********************************************************************/
const rearrange_UpperCase = str => {
  let upperStr = "";
  let lowerStr = "";

  for (let i = 0; i < str.length; i++){ 
    ((str[i].charCodeAt(0) >= 65) && (str[i].charCodeAt(0) <= 90))? upperStr += str[i] : lowerStr += str[i];
  }
  return upperStr.concat(lowerStr);
}

const testRearrage = (str , expected) => {
  return rearrange_UpperCase(str) === expected;
}

console.log(testRearrage("hApPy" , "APhpy"));
console.log(testRearrage("moveMENT" , "MENTmove"));
console.log(testRearrage("shOrtCAKE" , "OCAKEshrt"));
console.log(testRearrage("hApPy" , "APhpy"));
console.log(testRearrage("hA" , "Ah"));
console.log(testRearrage("ThIs iS gOOd" , "TISOOhs i gd"));