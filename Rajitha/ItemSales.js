const items = [
    {Item: 'Shoes', Price: 12},
    {Item: 'Pants', Price: 14},
    {Item: 'Dress', Price: 18},
    {Item: 'Hat', Price: 13},
    {Item: 'Socks', Price: 3},
    {Item: 'Bandaid', Price: 1000}
];

const tax = [
    {Tax: 9}
];

let customerSales = [];
function addCustomerSales(customer,order,quantity) {
    customerSales.push({'Customer': customer, 'Order': order, 'Quantity': quantity});
}

addCustomerSales('Dan','Shoes',1);
addCustomerSales('Dan','Pants',2);
addCustomerSales('Sally','Dress',1);
addCustomerSales('Sally','Socks',2);
addCustomerSales('Jon','Hat',1);
addCustomerSales('Jon','Socks',5);
addCustomerSales('Dan','Bandaid',1);
addCustomerSales('Jon','Bandaid',5);

console.log(customerSales);

/***********************************************************
 *How many items were scanned before Jon's Hat got scanned?
 ***********************************************************/
const scanItemsBeforeJon = () => {
    let i=0;
    do {
        if (customerSales[i].Order != 'Hats'){}
        else{return i++;}
        i++;
    }
    while (i<customerSales.length)
};
console.log("Number of items scanned before Jon are " +scanItemsBeforeJon());

/*********************************************
 *      How many people bought socks
 *********************************************/
const socksCustomerCount = (order) => {
    let i=0;
    let customerCount = 0;
    do {
        if (customerSales[i].Order == order){
            customerCount++;
        }
        i++;
    }
    while (i<customerSales.length)
    return customerCount;
};
console.log("Number of people who bought socks are " +socksCustomerCount('Socks'));

/*********************************************
 *      Total Quantity Sold
 *********************************************/
const totalSoldQuantity = () => {
    let totalQuantity = 0;
    for (let i=0; i<customerSales.length; i++){
        totalQuantity += customerSales[i].Quantity;
    }
    return totalQuantity;
};
console.log("Total Quantity Sold " +totalSoldQuantity());

/*********************************************
 *      Did Sally buy a dress
 *********************************************/
const checkIfDressBought = (customer,order) => {
    for (let i=0; i<customerSales.length; i++){
        if((customerSales[i].Customer === customer) && (customerSales[i].Order === order))
            return true;
    }
};
console.log("Did Sally buy a Dress: " );
console.log(checkIfDressBought('Sally','Dress')?"Yes":"No");

console.log("Did Dan buy a Dress: " );
console.log(checkIfDressBought('Dan','Dress')?"Yes":"No");

/*********************************************
 * What is the total amount after tax?
 *********************************************/
/** Calculate itemized price and add the details to new array **/
let itemsPrice = [];
const itemizedPriceSummary = () => {
    let totalSingleOrderCount = 0;
    for(let j=0;j<items.length;j++)
    {
        for (let i=0;i<customerSales.length;i++) {
            if (items[j].Item === customerSales[i].Order) {
                totalSingleOrderCount += customerSales[i].Quantity;
            }
        }
        let totalItemPrice = ((totalSingleOrderCount * items[j].Price) + (totalSingleOrderCount * items[j].Price)* (tax[0].Tax/100));
        itemsPrice.push({'TotalItemQuantity': totalSingleOrderCount, 'TotalPrice': totalItemPrice});
        totalSingleOrderCount = 0;
    }
    return items;
}

itemizedPriceSummary();
console.log(itemsPrice);

/** Calculate Total item price after tax **/
const totalItemPriceAfterTax = () => {
    let totalItemPrice=0;
    for (let i=0;i<itemsPrice.length;i++){
        totalItemPrice += itemsPrice[i].TotalPrice;
    }
    return totalItemPrice;
}

console.log("Total price after tax: " +totalItemPriceAfterTax());

/**************************************************************
 * What is the total amount after tax for Sally? (any customer)
 **************************************************************/
var custItemData = [];
const getCustomerTotalAmountAfterTax = (customer) => {
    let totalCustomerAmount = 0;
    let j=0;
    for (let i=0;i<customerSales.length;i++){
        if (customerSales[i].Customer === customer){
            custItemData.push({'Customer':customerSales[i].Customer,'Order':customerSales[i].Order,'Quantity':customerSales[i].Quantity});
        }
    }
    for (let k=0;k<custItemData.length;k++){
        for (let l=0;l<items.length;l++){
            if(custItemData[k].Order === items[l].Item){
                totalCustomerAmount += ((custItemData[k].Quantity * items[l].Price) + (custItemData[k].Quantity * items[l].Price * (tax[0].Tax/100)));
            }
        }
    }
    return totalCustomerAmount;
}
console.log("Total amount for Sally is: " +getCustomerTotalAmountAfterTax('Sally'));
