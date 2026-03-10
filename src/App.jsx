import { useState } from 'react'
import './App.css'

function App() {
  const [number, set_number] = useState(0)

  const increment=()=>{
    set_number(number+1)
  }
  const decrement=()=>{
  if(number>0) set_number(number-1)
  }

  const reset=()=>{
    set_number(0)
  }

  return (
    
      <div>
        <h1>counter app {number}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>R</button>
      </div>
  )    
}
        

export default App
