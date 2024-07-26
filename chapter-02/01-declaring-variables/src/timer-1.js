// greeting 함수를 선언한 후 콜백 함수 로 사용
let count = 0;

// function greeting() {
//   count++;
//   console.log("안녕하세요? " +  count);
// }
// setInterval(greeting, 2000);

// 직접 함수 선언(화살표함수) 실행
setInterval(() => {
  count++;
  console.log("안녕하세요? " +  count);
}, 2000);