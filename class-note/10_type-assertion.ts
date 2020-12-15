//타입 단언(type assertion)
var abc;
abc = 5;
abc = 'abc';
var bcd = abc as string;
//타입스크립트보다 개발자가 타입을 더 잘 알고 있을때 타입을 딱 정해서 알려주는 것

//DOM API 조작
var div = document.querySelector('div');
if(div){
    div.innerText
}