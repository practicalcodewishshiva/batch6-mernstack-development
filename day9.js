// const productName = "Apple";

// // obj creation
// // ? if single person or single product
// // const productDetails = {
// //   productName: "Onion (Pyaz)",
// //   price: "₹28",
// //   selectUnit: "Select Unit",
// //   location: "Pragathi Nagar",
// //   alltaxes: "(Inclusive of all taxes)",
// // };

// // console.log(productName);
// // console.log(productDetails.location);

// // what if incase multiple product use cheste?

// // arrays;

// const productArr = [
//   "Onion (Pyaz)",
//   "₹28",
//   "Select Unit",
//   "Pragathi Nagar",
//   "(Inclusive of all taxes)",
// ];

// console.log(productArr[3], productArr[0], productArr[1]);

// array ?

// array with objs

const productInfo = [
  {
    productName: "Onion (Pyaz)",
    price: "₹28",
    selectUnit: "Select Unit",
    location: "Pragathi Nagar",
    alltaxes: "(Inclusive of all taxes)",
  },
  {
    productName: "Avocado Hass - Tanzania",
    price: "₹209",
    selectUnit: "Select Unit",
    location: "Pragathi Nagar",
    alltaxes: "(Inclusive of all taxes)",
  },
  {
    productName: "Dragon Fruit",
    price: "134",
    selectUnit: "Select Unit",
    location: "Pragathi Nagar",
    alltaxes: "(Inclusive of all taxes)",
  },
];

// console.log(productInfo[200000].productName,productInfo[18000].productName );

//  array call ? [index]
//  object call?  .notation

// loops
// for 100% deprecited

// productInfo

// 1%
for (let index = 1; index < productInfo.length; index++) {
  const element = productInfo[index];
  console.log(element);
}

// 99.9% map
productInfo.map((ele, index)=>{
    console.log(element.name);
})

// console.log(productInfo[0], productInfo[1], productInfo[2]);
// console.log(productInfo.length, "product length")
