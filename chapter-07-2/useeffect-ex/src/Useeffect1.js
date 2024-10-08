import React, { useState } from 'react';
import { useEffect } from 'react';

export default function Useeffect1() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 랜더링 될때마다 매번 실행됨  - 종속배열 없는 경우
  // 마운트 될때만 - []
  // 해당 상태값이 바뀔때만  - [상태]
  useEffect(() => {
    console.log(`랜더링...useEffect  ${count}`);
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <br />
      이름
      <input type="text" value={name} onChange={handleInputChange} />
      <span></span>
    </div>
  );
}
