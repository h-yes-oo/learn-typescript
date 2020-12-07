enum Shoes {
    Nike,
    Adidas
}

//default 값을 설정하지 않으면 숫자형 이넘으로 설정되고, 1씩 증가하는 형태이다
var myShoes = Shoes.Nike;
console.log(myShoes); // 0
console.log(Shoes.Adidas); //1

// 문자형 이넘
enum ShoeBrands {
    Nike = '나이키',
    Adidas = '아디다스'
}

console.log(ShoeBrands.Nike); // 나이키
console.log(ShoeBrands.Adidas) // 아디다스


//example

enum Answer {
    Yes = 'Y',
    No = 'N'
}
function askQuestion(answer: Answer) {
    if(answer === Answer.Yes) {
        console.log('correct');
    }
    if(answer === Answer.No){
        console.log('wrong');
    }
}

askQuestion(Answer.Yes);