import React, { memo } from 'react';

const Child = ({ name, age, job, tellMe }) => {
  console.log('자녀도 랜더링이 되었네요');
  return (
    <div style={{ border: '2px solid powderblue', padding: '10px' }}>
      <h3>자녀</h3>
      <p>name: {name}</p>
      <p>age: {age}살</p>
    </div>
  );
};

export default memo(Child);
