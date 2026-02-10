let initialBaseData = {
  from: "Hyderabad",
  to: "Bengaluru",
  departure: "6thFeb2026",
  Travellerclass: 1,
};

// synchirouns

let gangadharObj = initialBaseData;
console.log("copy of initialBaseData 1", gangadharObj)
gangadharObj = {
  from: "vizag",
  to: "Goa",
  departure: "13thFeb2026",
  Travellerclass: 2,
};
gangadharObj.from = "Bellary"
console.log("obj ref create and I am udpating", gangadharObj)
console.log("intialData", initialBaseData);
// console.log("gangadharObj", gangadharObj);
