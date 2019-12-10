// iTems object
var items = {
  Shoes: 12,
  Pants: 14,
  Dress: 18,
  Hat: 13,
  Socks: 3,
  Bandaid: 1000
}

var tax = 0.9;

var customerBought = [];

function custBought(name, item, qty) {
  customerBought.push({ name, item, qty});
}

custBought("Dan", "Shoes", 1);
custBought("Dan", "Pants", 2);
custBought("Sally", "Dress", 1);
custBought("Sally", "Socks", 2);
custBought("Jon", "Hat", 1);
custBought("Jon", "Socks", 5);
custBought("Dan", "Bandaid", 1);
custBought("Jon", "Bandaid", 5);

const temp = [{name:'Dan', item: 'Shoes', qty:1}]
const currentItem = temp[0]//object
const quantity = currentItem.qty;// 1
const valueOfItem = currentItem.item// Shoes
const getShoePrice = items[valueOfItem];//12

function itemTotalPrice ({item, qty}){
  //let {item, qty} = currentItem;
  var getItemPrice = items[item];
  return getItemPrice * qty;
 }
 
 function itemTotalTax(itemTotal, tax){
   return itemTotal*tax;
 }
 
 function calcTotal(sales, tax) {
   var totalPrice = 0;
   var totalTax = 0;
   sales.forEach(obj => {
     totalPrice += itemTotalPrice(obj);
   })
     totalTax =  itemTotalTax(totalPrice, tax);
   return totalPrice+totalTax;
 }
 
 console.log (calcTotal(customerBought, tax));
 
 function totalForAPerson(name, sales, tax){
   var totalAmountForUser = 0;
   var totalTax = 0;
   sales.forEach(obj => {
     if(obj.name === name){
       totalAmountForUser += itemTotalPrice(obj);
     }
   })
   totalTax =  itemTotalTax(totalAmountForUser, tax);
   return totalAmountForUser+totalTax;
 }
 
 console.log(totalForAPerson('Sally', customerBought, tax));

//items before Jon's hat scan
function findBeforeScanNumber(personName, items) {
  for (i = 0; i < customerBought.length; i++) {
    var cust = customerBought[i];
    //var NumBeforeThisScan = ((customerBought[i].name === personName) && (customerBought[i].item === items)) ? i : 0; - Not working
    if (cust.name === personName && cust.item === items) {
      return i;
    } 
  }
  return 0;
}

function findBeforeScanNumber(personName, items) {
  var something = 0;
  for (i = 0; i < customerBought.length; i++) {
    var cust = customerBought[i];
    //var NumBeforeThisScan = ((customerBought[i].name === personName) && (customerBought[i].item === items)) ? i : 0; - Not working
    if (cust.name === personName && cust.item === items) {
      something = i;
    } 
  }
  return something;
}

findBeforeScanNumber("Jon", "Hat");

//how many people bought socks

function howManyBoughAnItem(item) {
  var person = 0;
  for (var i = 0; i < customerBought.length; i++) {
    if ((customerBought[i].item === item)) {
      person++;
    }
  }
  return person;
}

howManyBoughAnItem("Socks");

//total qty sold

function totalQuantity() {
  var totalQty = 0;
  for (var i = 0; i < customerBought.length; i++) {
    totalQty += customerBought[i].qty;
  }
  return totalQty;
}

totalQuantity();

//did sally buy a dress

function didThisPersonBuy(personName, items) {
  for (var i = 0; i < customerBought.length; i++) {
    if (customerBought[i].name === personName && customerBought[i].item === items) {
        return true;
    }
  }
  return false;
}

didThisPersonBuy("Sally", "Dress");
didThisPersonBuy("Dan", "Dress");

//Total Amount After Tax

function totalAmountAfterTax() {
  var totalAmount = 0;
  var totalBeforeTax = 0;
  var totalTax = 0;
  for (var i = 0; i < customerBought.length; i++) {
    for (var item in items) {
      if (customerBought[i].item === item) {
        var itemPrice = parseInt(items[item].split('$')[1]);
        totalBeforeTax = ((itemPrice * customerBought[i].qty));
        totalTax = totalBeforeTax * (parseInt(tax) / 100);
        totalAmount += (totalBeforeTax + totalTax);
      }
    }
  }
  return `\$${totalAmount}`;
}

totalAmountAfterTax();

function totalAmountForOne(personName) {
  var totalAmount = 0;
  for (var i = 0; i < customerBought.length; i++) {
    if (customerBought[i].name === personName) {
      for (var item in items) {
        if (customerBought[i].item === item) {
          var itemPrice = parseInt(items[item].split('$')[1]);
          totalBeforeTax = ((itemPrice * customerBought[i].qty));
          totalTax = totalBeforeTax * (parseInt(tax) / 100);
          totalAmount += (totalBeforeTax + totalTax);
        }
      }
    }
  }
  return `\$${totalAmount}`;
}

totalAmountForOne("Sally");

//tried to create a function for 
function totalAfterTax(taxPerc, price, quantity) {
  var totalBeforeTax = 0;
  var totalTax = 0;
  var total = 0;
  totalBeforeTax = price * quantity;
  totalTax = totalBeforeTax * taxPerc;
  total = totalBeforeTax + totalTax;

  return total;
}

totalAfterTax()


function totalAmountForOneNew(personName) {
  var totalAmount = 0;
  for (var i = 0; i < customerBought.length; i++) {
    if (customerBought[i].name === personName) {
      for (var item in items) {
        if (customerBought[i].item === item) {
          var itemPrice = parseInt(items[item].split('$')[1]);
          totalAmount += totalAfterTax((tax, itemPrice, customerBought[i].qty));
          console.log(totalAmount);
          //totalBeforeTax = ((items[item]*customerBought[i].qty));
          //totalTax= totalBeforeTax*(tax/100);
          //totalAmount+= (totalBeforeTax + totalTax);
        }
      }
    }
  }
  return `\$${totalAmount}`;
}

totalAmountForOneNew("Sally");