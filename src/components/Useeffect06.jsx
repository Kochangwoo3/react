import React, { useEffect, useState } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(()=>{
    window.addEventListener("keydown", forceRender);
    // Clean up
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
}

export default function Useeffect06() {
  useAnyKeyToRender();

  useEffect(() => {
    console.log("fresh render");
  });

  return <h1>Open the console</h1>;

}