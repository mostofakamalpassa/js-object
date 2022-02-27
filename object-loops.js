const studenst = { name: "kamal", age: 66, address: "gazipur", isCliend: true };

// for(let i =0; i<10; i++){
//     console.log(i);
// }


for(const stud in studenst){

  //  console.log(stud,' = ', studenst[stud]);
}


const studenstKeys = Object.keys(studenst);

console.log(studenstKeys);

for(const prop of studenstKeys){
   // console.log(studenst[prop]);
}


// object entries Advance
const objectEntries = Object.entries(studenst);

for(const [key, value] of objectEntries){
    //console.log(key , ' = ', value);
}


const obj = {name:'a',age:3};

    Object.seal(obj);

    obj.newName = "kamal passa";

    console.log(obj);