// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const UpdaterFunc = () => {
  const [Count, setCount] = useState(0)
  const increase = () => {
    setCount((c) => c + 1)
    setCount((c) => c + 1)
    setCount((c) => c + 1)
  }
  const decrease = () => {
    setCount((c) => c - 1)
    setCount((c) => c - 1)
    setCount((c) => c - 1)
  }
  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increase}>Increase</button>
    </div>
  )
}

export default UpdaterFunc
