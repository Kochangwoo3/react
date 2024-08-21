function multiple(a, b = 5, c = 10) {
//function multiple(a=1, b = 5, c) {  
  return a * b + c;
}

console.log(multiple(5, 10, 20)); // a=5, b=10, c=20  70
console.log(multiple(10, 20)); // a=10, b=20, c=10  210
console.log(multiple(10)); //a=10, b=5, c=10  60
console.log(multiple());


//선언하기 전에 함수 호출
// hey(); // 이름 있는 함수 호이스팅 가능

// // 뒤에서 함수 선언 
// function hey() {
//   alert("hey!");
// }


// 함수 표현식 : 자바스크립트  - 이름없는 함수
// 이문법은 매우중요함
// 변수에 값을 대입하듯이 함수를 대입해서 사용할 수 있음
// logCompliment();    const 함수 표현식은 호이스팅이 안됨

const logCompliment = function() {
  console.log("잘했어요!");
};
logCompliment();

const logCompliment2 = function(firstName) {
  console.log(`잘했어요! ${firstName}`);
};
logCompliment2("창우");



const logCompliment3 = function(firstName) {
  return `잘했어요! ${firstName}`;
};
alert(logCompliment3("창우"));