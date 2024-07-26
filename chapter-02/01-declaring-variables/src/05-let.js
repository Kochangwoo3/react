const factor = 5;
// 함수 선언
function calc() {
  return num * factor;  // 에러  not define num
}

{
  const num = 10;  // const, let 블럭범위한정됨
  let result = calc();
  //console.log("result : " + result);
  console.log(`result : ${result}`);
}
