function helloWorld(str1, str2){
    return `Hello ${str1} ${str2}`;
}

console.log(helloWorld('Jack', 'Ryan'));

const stringToBoolean = !!" ";
console.log(`!!" " is ${stringToBoolean}`);

const  stringToBoolean3 = Boolean("hello world");
console.log(stringToBoolean3);

const stringToBoolean1 = !!" ";
console.log(`!!" " is ${stringToBoolean1}`);

const numberToBoolean = !!1;
console.log(numberToBoolean);

const numberToBoolean1 = !!0;
console.log(numberToBoolean1);``

const numberToBoolean2 = !!-1;
console.log(`!!-1 is ${numberToBoolean2}`);

const arrayToBoolean = !![1];
console.log(arrayToBoolean);

const arrayToBoolean1 = !![];
console.log(arrayToBoolean1);

const objectToBoolean = !!{};
console.log(`!!{} is ${objectToBoolean}`);

const objectToBoolean1 = !!{ type: false};
console.log(objectToBoolean1);

const undefinedToBoolean = !!undefined;
console.log(undefinedToBoolean);

const nullToBoolean = !!null;
console.log(`!!null is ${nullToBoolean}`);

//Or and And
console.log('***********')
console.log("Check OR value")
console.log('***********')
let someValue = false || true;
console.log(someValue);

let someValue1 = false || true || false;
console.log(someValue1);

let someValue2 = false || ""
console.log(someValue2);

let someValue3 = "hello" || 0 || false; //result is Nan???
console.log("hello is ", +someValue3);

let someValue4 = "  " || "chicken" || {};
console.log("chicken is " +someValue4);

let someValue5 = {};
console.log("{} is " +someValue5); //result is [object Object] instead of {}???

let someValue6 = undefined;
console.log(someValue6);

let someValue7 = -1 || undefined;
console.log(someValue7);

let someValue8 = null || undefined || {} ;
console.log(someValue8);

let someValue9 = null || [] || {} ;
console.log(someValue9);

console.log('***********')
console.log("Check AND value")
console.log('***********')
let Value = false &&  true;
console.log(Value);

let Value1 = false && true &&  false;
console.log(Value1);

let Value2 = false &&  "" ;
console.log(Value2);

let Value3 = "hello" &&  0  &&  false; //Should return false?? Returns 0
console.log("hello" + Value3);

let Value4 = "  " &&  "chicken" &&  {}; //
console.log("chicken value " +Value4);

let Value5 = {};
console.log(Value5);

let Value6 = undefined;
console.log(Value6);

let Value7 = -1 &&  undefined;
console.log(Value7);

let Value8 = null &&  undefined &&  {} ;
console.log(Value8);

let Value9 = null &&  [] &&  {} ;
console.log("Value9 "+Value9);

function hello () {
    return false;
}

let Value10 = "yes" && function () { return false };
console.log("value10 " +Value10);

let Value11 = 1000 && hello();
console.log(Value11);

let Value12 = "yes" && (function  () { return undefined }()); //Need to understand
console.log(Value12);
