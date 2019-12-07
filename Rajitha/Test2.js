const isOpen = true;
const isClosed = false;
const myTitle = "The best show in the world";

function isOn (isActive) {
    return isActive
};

let isShowing = function ( isHidden )  {
    return !isHidden;
};

let getProps = function ( title ) {
    return { title: title}
};

let someValue = isOn(false) || getProps("yo"); //returns objects
console.log("someValue1 ", +someValue);

let someValue1 = isOn(isOpen) || getProps("yo") || {}; //returns true
console.log("someValue1 ", +someValue1);

let someValue2 = isOn(true) || getProps() || {}; //returns true
console.log("someValue2 ", +someValue2);

let someValue3 = isOn(isClosed) || isShowing(isClosed); //returns true
console.log("someValue3 ", +someValue3);

console.log("check this " + isShowing(false)); //return true
console.log("****", +isOn(isClosed)); //why is it returning 0 instead of false

let someValue4 = isOn( isShowing( isOpen ) ) ||  isOn( !!getProps() ); //returns object
console.log("someValue4 ", +someValue4);

let someValue5 = getProps && myTitle && getProps(myTitle); //object with title property
console.log("someValue5 ", +someValue5);

let someValue6 = ( 1-1 && getProps("hello")) || (  isOn(isClosed) || myTitle ) //returns Title value
console.log("someValue6 ", +someValue6);