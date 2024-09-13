// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'

const UseRefExm = () => {
  const ref = useRef(0)
  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)
  console.log(ref)

  useEffect(() => {
    console.log('Comp rendered')
    console.log(inputRef1)
  })

  const handleClick1 = () => {
    ref.current = ref.current + 1
    //ref.current++
    inputRef1.current.focus()
    inputRef1.current.style.backgroundColor = 'yellow'
    inputRef2.current.style.backgroundColor = ''
    inputRef3.current.style.backgroundColor = ''
  }
  const handleClick2 = () => {
    ref.current = ref.current + 1
    //ref.current++
    inputRef2.current.focus()
    inputRef1.current.style.backgroundColor = ''
    inputRef2.current.style.backgroundColor = 'yellow'
    inputRef3.current.style.backgroundColor = ''
  }

  const handleClick3 = () => {
    ref.current = ref.current + 1
    //ref.current++
    inputRef3.current.focus()
    inputRef1.current.style.backgroundColor = ''
    inputRef2.current.style.backgroundColor = ''
    inputRef3.current.style.backgroundColor = 'yellow'
  }

  return (
    <div>
      <button onClick={handleClick1}>Click me 1</button>
      <input type='text' ref={inputRef1} />
      <br />
      <button onClick={handleClick2}>Click me 2</button>
      <input type='text' ref={inputRef2} />
      <br />
      <button onClick={handleClick3}>Click me 3</button>
      <input type='text' ref={inputRef3} />
    </div>
  )
}

export default UseRefExm
