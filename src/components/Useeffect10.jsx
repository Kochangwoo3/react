import React, { useCallback, useEffect, useMemo, useState } from 'react';

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener('keydown', forceRender);
    // Clean up
    return () => window.removeEventListener('keydown', forceRender);
  }, []);
};

function WordCount({ children = '' }) {
  useAnyKeyToRender();

  // 참조함수 주소   : 랜더링 될때마다 새로운 함수가  생성되면서 주소가 할당
  const fn = useCallback(() => {
    console.log('hello');
    console.log('world');
  }, []);

  useEffect(() => {
    console.log('fresh render');
    fn();
  }, [fn]);

  return (
    <>
      <p>{children}</p>
    </>
  );
}

export default function Useeffect10() {
  return <WordCount>You are not going to believe this but...</WordCount>;
}
