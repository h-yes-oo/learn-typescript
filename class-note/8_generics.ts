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
