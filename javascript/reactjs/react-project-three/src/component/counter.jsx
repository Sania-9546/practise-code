import {useState} from 'react'
import './counter.css'
function Counter() {
  const[count, setCount] =useState(0);
  return (
    <div className="counter-container">
      <p id="para">you have clicked {count} times</p>
      <div id="button-container">
        <button id="button" onClick={() => setCount(count + 1)}>
          Click me!
        </button>
        <button id="clear-button" onClick={() => setCount(0)}>
          Clear
        </button>
      </div>
    </div>
  )
}
export default Counter
