var ITEMS = {
  shoes: 12,
  pants: 14,
  dress: 18,
  hat: 13,
  socks: 3,
  bandaid: 1000
}

var TAX = 0.09; 

var orderDetails = [];
function customerBought(customer, orderedItem, qty) {
	return orderDetails.push({
 		customer,
  	orderedItem,
  	qty
  })
}

customerBought('Dan', 'shoes', 1);
customerBought('Dan', 'pants', 2);
customerBought('Sally', 'dress', 1);
customerBought('Sally', 'socks', 2);
customerBought('Jon', 'hat', 1);
customerBought('Jon', 'socks', 5);
customerBought('Dan', 'bandaid', 1);
customerBought('Jon', 'bandaid', 5);

console.log(orderDetails);

function noOfPeopleScannedBefore(customer, orderDetails) {
	for (var i = 0; i < orderDetails.length; i++) {
  	if ( orderDetails[i].customer === customer) {
    	return i;
    }
  }
}

console.log('Number of People scanned before Jon: ' + noOfPeopleScannedBefore('Jon', orderDetails));

function noOfPeopleBoughtItem(item, orderDetails) {
  var noOfPeople = 0;

	for (var i = 0; i < orderDetails.length; i++) {
  	if ( orderDetails[i].orderedItem === item) {
    	noOfPeople += 1;
    }
  }
  return noOfPeople;
}

console.log('Number of People bought Socks: ' + noOfPeopleBoughtItem('socks', orderDetails));

function totalQtySold(orderDetails) {
  var totalQty = 0;

	for (var i = 0; i < orderDetails.length; i++) {
  	totalQty += orderDetails[i].qty;
  }
  return totalQty;
}

console.log('Total Quantity Sold: ' + totalQtySold(orderDetails));

function verifyItemBoughtByCustomer(customer, item, orderDetails) {
	for (var i = 0; i < orderDetails.length; i++) {
  	if (orderDetails[i].customer === customer && orderDetails[i].orderedItem === item) {
			return true;
    }
  }
  return false;
}

console.log('Does Sally buy a Dress: ' + verifyItemBoughtByCustomer('Sally', 'dress', orderDetails));
console.log('Does Dan buy a Dress: ' + verifyItemBoughtByCustomer('Dan', 'dress', orderDetails));

function totalAmount(orderDetails) {
  var total = 0;

	for (var i = 0; i < orderDetails.length; i++) {
  	total += orderDetails[i].qty * ITEMS[orderDetails[i].orderedItem];
  }
  return total;
}
console.log('Total amount before tax:' + totalAmount(orderDetails));

var totalPriceAfterTax = function (tax, totalAmountBeforeTax, orderDetails, customer) {
  var totalPrice = totalAmountBeforeTax(orderDetails, customer);
  return totalPrice + (totalPrice * tax); 
}

console.log('Total sale amount after tax:' + totalPriceAfterTax(TAX, totalAmount, orderDetails));

function totalAmountPerCustomer(orderDetails, customer) {
  var total = 0;

  for (var i = 0; i < orderDetails.length; i++) {
    if (orderDetails[i].customer === customer)
    total += orderDetails[i].qty * ITEMS[orderDetails[i].orderedItem];
  }
  return total;
}

console.log('Total amount after tax for Sally:' + totalPriceAfterTax(TAX, totalAmountPerCustomer, orderDetails, 'Sally')); 
