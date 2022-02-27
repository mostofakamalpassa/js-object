const first = {a:1, b:2};
const second = {a:1, b:2};

// compare Two Object  it is not work  because object are referential intigrity
if(first == second){
    console.log("object are equals");
}else{
    console.log("object are not equlas");
}


// compare two object by  JSON Stringify   is work when  two object property position same

if(JSON.stringify(first) === JSON.stringify(second)){

    console.log("Object are equal");
}else{
    console.log("Object are not Equals");
}

const first1 = {a:2, b:3, c:1};
const first2 = {a:2, c:1, b:3};


function ObjectCompares(obj1, obj2){

    // check the object Length

    if(Object.keys(obj1).length !== Object.keys(obj2).length){

        return false;
    }

    // for in loop  use every elements

    for(const key in obj1){

        // check the object proper valujes;
        if(obj1[key] !== obj2[key]){

            return false;
        }
    }

    return true;


}



console.log(ObjectCompares(first, second));