//타입 추론 기본 1

var a = 'abc';

function getB(b = 10) {
    var c = 'hi';
    return b + c;
}

var b : string = getB();

// 타입 추론 기본 2

interface Dropdown<T> {
    value: T;
    title: string;
}

const shoppingItem : Dropdown<string> = {
    value: 'apple',
    title: 'apple'
}