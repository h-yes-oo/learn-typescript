interface Dev {
    name: string;
    skill: string;
}

interface Student {
    name : string;
}

var developer: Dev;
var student: Student;
//developer = student; //skill이 없기 때문에 불가능
student = developer; //가능

//함수
var add = function(a: number) {
    // ...
}
var sum = function(a: number, b: number){
    // ...
}

//add = sum; //add는 하나의 인자만 받기 때문에 불가능
sum = add; //가능

// 제네릭
interface Empty<T> {
    // ...
}

var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
//notempty1 = notempty2; //불가능
//notempty2 = notempty1 //불가능