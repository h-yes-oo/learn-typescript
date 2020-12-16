interface Develop {
    name: string;
    skill: string;
}

interface Human {
    name: string;
    age: number;
}

function introduce() : Develop | Human {
    return {
        name: 'Tony', skill: 'making', age: 33
    }
}
var tony = introduce();
//console.log(tony.skill)

if((tony as Develop).skill) {
    var skill = (tony as Develop).skill;
    console.log(skill);
} else if ((tony as Human).age){
    var age = (tony as Human).age;
    console.log(age);
}

//타입 가드 정의
function isDeveloper(target : Develop | Human) : target is Develop {
    return (target as Develop).skill !== undefined;
}

if (isDeveloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}

function isHuman(target : Develop | Human) : target is Human {
    return (target as Human).age !== undefined;
}

if(isHuman(tony)) {
    console.log(tony.age);
} else {
    console.log(tony.skill)
}