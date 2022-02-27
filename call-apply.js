const students ={
    id:1,
    name:'kamal',
    money: 5000,
    major: 'economics',

    treatDey: function(expence, vat){

        const remeningBalance = this.money - expence-vat;

        return this.money =  remeningBalance;
    }
}



const studentJamal ={
    id:2,
    name:'jamal',
    money: 6000,
    major: 'English',
};

const studentTomal ={
    id:4,
    name:'tomal',
    money: 8000,
    major: 'Mathmetices',
};

// call mehtod use 

const callJamalTreateDeay =  students.treatDey.call(studentJamal, 500, 50);

// console.log(callJamalTreateDeay);

const callTotalTreatDey = students.treatDey.call(studentTomal, 1100, 110);

//console.log(callTotalTreatDey);


// Applay Method use 

const applayJamalTreatDey = students.treatDey.apply(studentJamal, [1200, 120]);

// console.log(applayJamalTreatDey);


const applyTomalTreatDey = students.treatDey.apply(studentTomal, [2000, 200]);

console.log(applyTomalTreatDey);

