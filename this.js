// console.log(this);

const students ={
    id:1,
    name:'kamal',
    money: 5000,
    major: 'economics',

    treatDey: function(expence, vat){

        const remeningBalance = this.money - expence-vat;

        console.log(this);

        return this.money =  remeningBalance;
    },

    treatDeyArrowFunction : ()=>{
        console.log(this);
    },

    treatDeyNormalFunction: function(){

        const arrowFunction = () => {
            console.log(this);
        }

        return arrowFunction();
    }
}

// students.treatDeyArrowFunction();
students.treatDeyNormalFunction();

// students.treatDey(2000, 200);


// function add(a, b){

//     const r = a+b;

//     console.log(this, "result =", r);
// }


document.getElementById('input-value').addEventListener('keypress', function(event){

    console.log(event.target.value);
})