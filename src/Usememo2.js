import React, { useEffect, useMemo, useState } from 'react';

export default function Usememo2() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // location변수 : 의존 관계를 깊이 검사하기
  //                의존배열값이 원시타입이냐 참조타입이냐를 명확히 해야함
  //---------------------------------------------------------
  //const location = isKorea ? '한국' : '외국'; // 참조변수 : 문자열값  - 리터럴
  // location변수가  객체 - 참조변수가  메모리주소를 참조

  // const location = {
  //   country: isKorea ? '한국' : '외국',
  // };
  //---------------------------------------------------------

  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '외국',
    };
  }, [isKorea]); // location 값이 isKorea에 따라서만 변경

  useEffect(() => {
    console.log('useEffect 호출');
  }, [location]);

  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}
