interface User {
    age: number;
    name: string;
}

//변수에 활용한 인터페이스
var seho: User = {
    age : 30,
    name : 'seho'
}

//함수에 인터페이스 활용
function getUser(user : User) {
    console.log(seho);
}

const captain = {
    age: 40,
    name: 'captain'
}

getUser(seho);
getUser(captain);

// 함수의 스펙(구조)에 인터페이스를 활용
interface sumFunction {
    (a: number, b: number): number;
}

var sum: sumFunction;

sum = function(a: number, b: number): number {
    return a + b;
}

//인덱싱
interface StringArray {
    [index: number]: string;
}

var array : StringArray= ['a','b','c'];
array[0] = 'c';

//딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}

var obj1 : StringRegexDictionary= {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

console.log(obj1['cssFile']);

//인터페이스 확장

interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    language: string;
}

var hyeDev: Developer = {
    name: 'hyesoo',
    age: 24,
    language: 'python'
}