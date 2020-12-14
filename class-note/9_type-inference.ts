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

//타입 추론 기본 3
interface DetailedDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K;
}

var detailedItem: DetailedDropdown<number> = {
    value: 1,
    title: 'lalla',
    description: 'oh',
    tag:3
}

// Best Common Type
var arr = [1,2,true,'lalala',5,6,7];