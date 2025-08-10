import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleAdding = () => setCount(count + 1);
  const handleSubtracting = () => setCount(count - 1);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleAdding}>Add</button>
      <button onClick={handleSubtracting}>Subtract</button>
    </>
  );
}

export default App;
