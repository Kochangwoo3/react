import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Useeffect05() {
  const [val, set] = useState("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    set("");
  };

  useEffect(()=>{
    console.log(`typing: "${val}"`);
  }, [val]);

  useEffect(()=>{
    console.log(`saved phrase: "${phrase}"`);
  }, [phrase]);

  return (
    <>
      <label>Favorite phrase</label>
      <input
        value = {val}
        placeholder={phrase}
        onChange={e => set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  );



}