import { useState } from "react";

const heavyWork = () => {
  console.log('엄청 오래걸리는 초기화 작업');
  return ['JAVA', 'ORACLE'];
};


export default function TodoList() {
  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  //const [names, setNames] = useState(['JAVA', 'ORACLE']);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    // 셋터함수를 이용해 인풋텍스트 박스 입력값 input 상태변수에 대입
    setInput(e.target.value);
  }
  console.log(input);

  const handleUpload = () => {
    
    setNames((prevState) => {
      console.log(prevState);
      return [input, ...prevState, ];
    })
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange}/>
      <button onClick={handleUpload}>Upload</button>
      {
        names.map((name, idx) => {
          return <p key={idx}>{name}</p>;
        })
      }
    </div>
  );
}