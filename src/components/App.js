import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    // console.log("12");
    setCounter(counter + 1);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <p> Button clicked {counter} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
