// greeting 함수를 선언한 후 콜백 함수 로 사용
var count = 0;

let timer = setInterval(() => {
  count++;
  console.log("안녕하세요? " +  count);
  if (count === 3){
    clearInterval(timer);
  }
}, 2000);
