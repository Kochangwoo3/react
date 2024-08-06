import { useState, useRef } from "react";

const AppUseRefVar = () => {

  // useRef변수를 쓰는 첫번째 이유는 랜더링과 별개로 값을 
  // 가지고 있고 싶을때 사용
  
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);  //{current: 0}
  let countVar = 0;  // 일반변수

  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log('ref: ', countRef.current);
  };
  const increaseVar = () => {
    countVar = countVar + 1;
    console.log('var: ' + countVar);
  };

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>렌더</button>
      <button onClick={increaseRef}>Ref올려</button>
      <button onClick={increaseVar}>Var올려</button>
    </div>
  );


};

export default AppUseRefVar;