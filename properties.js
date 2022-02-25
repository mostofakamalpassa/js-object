const studenst = { name: "kamal", age: 66, address: "gazipur", isCliend: true };

// get all object  property Values
const objectValues = Object.values(studenst);

// console.log(objectValues);

// get all object  Property Keys
const objectKeys = Object.keys(studenst);

// console.log(objectKeys);

// get all Object property keys and values and pair
const objectEntries = Object.entries(studenst);

// console.log(objectEntries);

// object seal can not delete propery

// Object.seal(studenst);

// freeze can not delete and modify property value or change
       // Object.freeze(studenst);
// object properyty Delete
delete studenst.isCliend;
studenst.isCliend = false;
//console.log(studenst);

//console.log(studenst);
