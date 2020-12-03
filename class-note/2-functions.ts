//함수의 파라미터에 타입을 정의하는 방식
function sum(a:number, b: number){
    return a+b;
}
sum(10,20);

//함수의 반환 값에 타입을 정의하는 방식
function add() : number {
    return 10;
}

//함수에 타입을 정의하는 방식
function mySum(a:number,b:number):number{
    return a+b;
}

// mySum(1,2,3,4); //자바스크립트에서는 가능하지만, 타입스크립트에서는 불가

//함수의 optional parameter
function log(a:string, b?:string, c?:string){
    
}

log('hello world');
log('hello ts','abc');
log('hi','my name is','coco')