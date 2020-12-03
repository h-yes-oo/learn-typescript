//JS의 문자열 선언
// var str = 'hello';

// TS의 문자열 선언
const str: string = 'hello';
let num: number = 10;
let arr: Array<number> = [1,2,3];
let heros: Array<string> = ['Thor', 'Hulk'];
let anyArray : Array<any> = ['ohmygod',1];
let items : number[] = [1,2,3];

//TS 튜플
let myAddress: [string,number] = ['gangnam',5];

//Ts 객체
let obj: object = {};
// let person: object = {
//     name: 'capt',
//     age: 100
// };
let person: {name: string, age:number} = {
    name: 'thor',
    age: 1000
}

// TS 진위값
let show: boolean = true;