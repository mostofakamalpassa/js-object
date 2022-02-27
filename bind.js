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


// student jamal   bind

const jamalTreatDey = students.treatDey.bind(studentJamal);

//console.log(jamalTreatDey(1000, 100));
//console.log(jamalTreatDey(500, 50));


// student toamal 

const tomalTreatDey = students.treatDey.bind(studentTomal);

// console.log(tomalTreatDey(1200, 120));
