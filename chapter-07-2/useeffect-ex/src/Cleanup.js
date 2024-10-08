import React, { useState } from 'react';
import Timer from './components/Timer';

function CleanUp() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default CleanUp;
