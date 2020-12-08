// ES2015 (ES6) 에서 소개된 비교적 최신 문법
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var capt = new Person('capt',100);

// 위 코드와 아래 코드는 완전히 동일

class Person {
    //클래스 로직
    constructor(name, age) {
        console.log("New Person Born !!");
        this.name = name;
        this.age = age;
    }
}

const hyesoo = new Person('hyesoo',24); // New Person Born !!
console.log(hyesoo);