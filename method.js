const studenst = {
    id:55,
    balance: 6000,
    name:'kamal passa',
    major:'Economices',
    subjects: ['English','socail work','statestics','Math','micro Economics', 'demographi','others'],
    bestFriends:{name:'jamal', major:'English'},
    isRich : false,
    takeExmap: function(){
        
        console.log('Taking Exam '+ this.name);
    },
    cost(balance){
        
        const remaningBalance = this.balance - balance;
        console.log(remaningBalance);

    }
}

studenst.takeExmap();

studenst.cost(1000);