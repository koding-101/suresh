//Create a function that moves all capital letters to the front of a word
//Assumptions:
//Input string only

var string;

function capToFront (str){
  var caps = "";
  var nonCaps = "";
  for(let i=0;i<str.length;i++){
    if(str[i] !== str[i].toLowerCase()){
      caps+=str[i];
    }else {
      nonCaps+=str[i]
    }
  }
  return caps+nonCaps;
}

function testCapsFrontFun(string, expected){
  var actual = capToFront(string);
  actual===expected? console.log(`expected ${expected} is same as actual ${actual}!`): console.log(`expected ${expected} is NOT same as actual ${actual}:(`);
}

testCapsFrontFun("hApPy", "APhpy");
testCapsFrontFun("moveMENT", "MENTmove");
testCapsFrontFun("shOrtCAKE", "OCAKEshrt");
testCapsFrontFun("nocaps", "nocaps");
testCapsFrontFun("ALLCAPS", "ALLCAPS");
testCapsFrontFun("12345678", "12345678");
testCapsFrontFun("&%$SPecial CHAr", "SPCHA&%$ecial r");
testCapsFrontFun("", "");
testCapsFrontFun(" ", " ");
testCapsFrontFun(" AaBb Cc DD e", "ABCDD ab c  e");
testCapsFrontFun("cki DoFkl  ", "DFcki okl  ");