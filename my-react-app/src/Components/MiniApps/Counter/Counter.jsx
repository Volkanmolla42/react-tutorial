import { useState } from 'react'
const Counter = () => {
  const [count, setCount] = useState(0)
  const dec = () => {
    setCount(count - 1)
  }
  const res = () => {
    setCount(0)
  }
  const inc = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h1>Counter: {count}</h1>
      <div className='buttons'>
        <button onClick={() => dec()}>Decrement</button>
        <button onClick={() => res()}>Reset</button>
        <button onClick={() => inc()}>Increment</button>
      </div>
    </div>
  )
}

export default Counter
