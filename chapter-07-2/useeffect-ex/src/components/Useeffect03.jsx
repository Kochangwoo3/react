import React, { useState, useEffect } from "react";

function Checkbox() {
  const [checked, setChecked] = useState(false);
  //랜더링 부수효과로 알림창 띄움  
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });

  return (
    <>
      <input 
        type="checkbox" 
        value={checked}
        onChange={() => setChecked(checked => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  );

}

export default function Useeffect03() {
  return <Checkbox />;
}