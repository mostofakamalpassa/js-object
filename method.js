const studenst = {
    id:55,
    name:'kamal passa',
    major:'Economices',
    subjects: ['English','socail work','statestics','Math','micro Economics', 'demographi','others'],
    bestFriends:{name:'jamal', major:'English'},
    isRich : false,
    takeExmap: function(){
        
        console.log('Taking Exam '+ this.name);
    }
}

studenst.takeExmap();