import './App.css';
import {useState} from 'react';

function App() {
  const [count,setCount]=useState(0);
  return (
    <div className="App">
      <h1>Counter using react redux</h1>
      <button
      onClick = {() => {
        setCount(count-1);}
      }
      >-</button>
      <span>{count}</span>
      <button
      onClick = {() => {
        setCount(count+1);}
      }
      >+</button>
    </div>
  );
}

export default App;
