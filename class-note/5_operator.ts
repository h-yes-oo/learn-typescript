function logMessage(value: any) {
    console.log(value);
}
logMessage('hello');
logMessage(100);
logMessage(false);

//union Type !!!
var me: string | number | boolean;
function log(value: string | number | boolean) {
    if(typeof value === 'number'){
        console.log(`This is number : ${value}`);
    } else if(typeof value == 'string') {
        console.log(`This is a string : ${value}`);
    } else{
        throw new TypeError('oh my god');
    }
}

log('hello');
log(100);
//log(false);

interface Dev {
    name: string;
    skill: string;
}

interface Pers {
    name: string;
    age: number;
}

function askSomeone(someone: Dev | Pers) {
    console.log(someone.name);
    //console.log(someone.skill);
    //console.log(someone.age);
}

var you : Dev = {
    name: 'haha',
    skill: 'cheers'
}

askSomeone(you);

function ask(someone: Dev & Pers) {
    console.log(someone.name);
    console.log(someone.age);
    console.log(someone.skill);
}

ask({name:'dev',skill:'python',age:40});
askSomeone({name:'dev',skill:'web'});
askSomeone({name:'person',age:19});