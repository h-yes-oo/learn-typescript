function logText<T>(text: T): T{
    console.log(text);
    return text;
}

logText<number>(1);
logText<string>('hi');
logText<boolean>(true);

// function logging(text: string){
//     console.log(text);
//     text.split('').reverse().join('');
//     return text;
// }

// function logNumber(num: number){
//     console.log(num);
//     return num;
// }

// function loglog(text: string | number){
//     console.log(text);
//     return text;
// }

function loglog<T>(text: T): T {
    console.log(text);
    return text;
}

const strAbc = loglog<string>('abc');
strAbc.split('');
const login = logText<boolean>(true);


//generic과 any의 차이는 뭘까 ??
function logAny(text: any): any {
    console.log(text);
    return text;
}

const anyText = logAny('abc');
console.log(anyText.split(''));

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
    console.log('length is '+ text.length);
    text.forEach(function (text) {
        console.log(text);
    });
    return text;
}
logTextLength<string>(['hi', 'coco', 'sooo', 'cute']);

//제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logLength<T extends LengthType>(text: T): T {
    console.log('length of this : '+text.length);
    return text;
}

logLength('abc'); //string에는 length가 제공되기 때문
//logLength(10); //number에는 length가 제공되지 않기 때문
logLength({mind:'good',length:10});

//제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShopppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    console.log(itemOption);
    return itemOption;
}

// getShopppingItemOption(10);
// getShopppingItemOption<string>('a');

getShopppingItemOption("name"); //name
getShopppingItemOption("stock"); //stock