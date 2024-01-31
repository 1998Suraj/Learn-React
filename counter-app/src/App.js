import { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  const handleIncrement = () =>{
    setCount(count + 1);
  }
  const handleDecrement = () => {
    setCount(count - 1);
  }
  return (
    <div className="App">
      <header>Counter App</header>
      <h1>{count}</h1>
      <div className="button-container">
        <button onClick={handleIncrement}>INCREMENT</button>
        <button disabled={count===0} onClick={handleDecrement}>DECREMENT</button>
      </div>
    </div>
  );
}

export default App;
