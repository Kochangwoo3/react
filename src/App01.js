import React, {useState} from 'react';
import { useEffect } from 'react';

export default function App01() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  }
  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  // 랜더링 될때마다 매번 실행됨
  useEffect(() => {
    console.log(`랜더링...useEffect  ${count}`);
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span><br />
      <input type="text" value={name} onChange={handleInputChange} />
      <span></span>
    </div>
  );
}
