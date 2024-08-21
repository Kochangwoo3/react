import React, { useState } from "react";

function Checkbox() {
  const [checked, setChecked] = useState(false);

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

  alert(`checked: ${checked.toString()}`);   // 랜더링 되지만 ALERT는 도달 불가 코드

}

export default function Useeffect02() {
  return <Checkbox />;
}