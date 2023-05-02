/*
const add = require('./utility-module/add.js');
const minus = require('./utility-module/minus.js');
const divide = require('./utility-module/divide.js');
const multiply = require('./utility-module/multiply.js');

const a = 10;
const b = 20;

console.log(add(a,b));
console.log(minus(a,b));
console.log(divide(a,b));
console.log(multiply(a,b));

*/

// Q.1 사칙연산 모듈을 4개 만들어서 import(가져오기) 후 호출한 예시이다.
// Q.1 아무래도 이렇게 하나하나 가져오는 것은 가독성면에서나 사용성면에서나 좋아보이지 않는다.
// Q.1 이것을 하나의 class 형태의 모듈로 만들어 관리할 수 있을까?

// Q.2 class에서 작성될 메서드는 모두 '정수'로 된 두 개의 인자를 받아서 결과를 반환하게끔 제한하려면
// Q.2 어떤 helper function을 사용해야 할까?
// Q.2 helper function을 사용하면 어떤 장점이 있을까?
// Q.2 helper function을 사용하지 않고 구현할 수 있는 방법이 있을까?

//*답변 코드
//*Q1: 아래와 같이 class로 만들 수 있습니다.
class Calculator {
  add(val1, val2) {
    if (checkInputValue(val1, val2)) {
      return val1 + val2;
    }
  }

  minus(val1, val2) {
    if (checkInputValue(val1, val2)) {
      return val1 - val2;
    }
  }

  divide(val1, val2) {
    if (checkInputValue(val1, val2)) {
      return val1 / val2;
    }
  }

  multiply(val1, val2) {
    if (checkInputValue(val1, val2)) {
      return val1 * val2;
    }
  }
}

const calculator = new Calculator();

console.log(calculator.add(1, 2));
console.log(calculator.minus(2, 3));
console.log(calculator.divide(3, 4));
console.log(calculator.multiply(4, 5));


//* Q2: typeCheck()이라는 함수를 만들어 입력 받은 값을 인자로 넣어 확인 후에 수행하도록 할 수 있습니다.
function typeCheck(val1, val2) {
  if (typeof(val1) === "number" && typeof(val2) === "number") {
    return true;
  } 
  else {
    console.log("입력 값은 모두 정수여야 합니다.");
    return false;
  }
}

//* Q2: 똑같은 코드가 반복되는 것을 함수 한 개를 호출함으로써 간략해지고, 보기가 좋아집니다.
//* Q2: 함수를 사용하지 않고 타입을 확인한다면, 아래 코드 처럼 조건문을 이용해 확인할 수 밖에 없을 것 같습니다.

function calculator(val1, val2, cal){

  if(typeof(val1) === "number" && typeof(val2) === "number"){

    if(cal === '+'){
      return val1 + val2;
    }
    else if(cal === "-"){
      return val1 - val2;
    }
    else if(cal === "*"){
      return val1 * val2;
    }
    else if(cal === "/"){
      return val1 / val2;
    }
  }
  else{
    console.log("입력 값은 모두 정수여야 합니다.")
  }
}

console.log(calculator(1, 2, "+"));