// import React, { useState } from "react";
// import "./../styles/App.css";

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const handleClick = () => {
//     setCounter(counter + 1);
//   };

//   return (
//     <div>
//       {/* Do not remove the main div */}
//       <p> Button clicked {counter} times</p>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import "./../styles/App.css";
const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
};
export default App;
