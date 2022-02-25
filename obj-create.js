
// 1. object literal OR using Object lineral Or object initialize 

const student = {
    name:'kamal',
    role:44,

}


// 2. object create By Object constructor

// const person = new Object();
const person = new Object({name:'jamal',fullName:'totmal'});


// console.log(person);

// 3. inhritanc of object 

// const human = Object.create(null);
const human = Object.create(person);

// console.log(human.name)

// 4. use Class 

class People {
    constructor(){
        this.name = 'kamal',
        this.age = 55;
    }
}

const p = new People();
// console.log(p.name);


// 5. function constructor 

function PersonFunc(name, age){
    this.name = name;
    this.age = age;
}

const pers = new PersonFunc('kamal passa', 44);