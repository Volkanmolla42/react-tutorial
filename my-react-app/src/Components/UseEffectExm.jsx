/**
 * A React component that demonstrates the use of `useEffect` hook.
 *
 * This component displays a counter, a color-changing button, and the current window size.
 * It uses three `useEffect` hooks to:
 * 1. Update the document title with the current count and color.
 * 2. Add and remove a window resize event listener to update the window size state.
 * 3. Update the document title with the current window size.
 *
 * @example
 * ```jsx
 * import React from 'react';
 * import ReactDOM from 'react-dom';
 * import UseEffectExm from './UseEffectExm';
 *
 * ReactDOM.render(<UseEffectExm />, document.getElementById('root'));
 * ```
 */

import React, { useEffect, useState } from 'react'

const UseEffectExm = () => {
  /**
   * State variables:
   * - `Count`: The current count, initialized to 0.
   * - `Color`: The current color, initialized to 'green'.
   * - `Width`: The current window width, initialized to the initial window width.
   * - `Height`: The current window height, initialized to the initial window height.
   */
  const [Count, setCount] = useState(0)
  const [Color, setColor] = useState('green')
  const [Width, setWidth] = useState(window.innerWidth)
  const [Height, setHeight] = useState(window.innerHeight)

  /**
   * useEffect hook 1: Update document title with count and color.
   *
   * This effect depends on `Count` and `Color` state variables.
   * It updates the document title with the current count and color.
   * The cleanup function logs a message to the console when the effect is cleaned up.
   */
  useEffect(() => {
    document.title = `count: ${Count} ${Color}`

    return () => {
      console.log('useEffect 1 cleanup')
    }
  }, [Color, Count])

  /**
   * Handle window resize event.
   *
   * Updates the `Width` and `Height` state variables with the new window dimensions.
   */
  const handleResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  /**
   * useEffect hook 2: Add and remove window resize event listener.
   *
   * This effect has no dependencies, so it only runs once when the component mounts.
   * It adds a window resize event listener to update the window size state.
   * The cleanup function removes the event listener when the component unmounts.
   */
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    console.log('EVENT LISTENER ADDED')

    return () => {
      window.removeEventListener('resize', handleResize)
      console.log('EVENT LISTENER REMOVED')
    }
  }, [])

  /**
   * useEffect hook 3: Update document title with window size.
   *
   * This effect depends on `Width` and `Height` state variables.
   * It updates the document title with the current window size.
   */
  useEffect(() => {
    document.title = `Size: ${Width} x ${Height}`
    return () => {}
  }, [Width, Height])

  /**
   * Increment the count by 1.
   */
  const addCount = () => {
    setCount((c) => c + 1)
  }

  /**
   * Decrement the count by 1.
   */
  const subtractCount = () => {
    setCount((c) => c - 1)
  }

  /**
   * Toggle the color between 'green' and 'red'.
   */
  const changeColor = () => {
    setColor((color) => (color === 'green' ? 'red' : 'green'))
  }

  return (
    <div>
      <p style={{ color: Color }}>Count: {Count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={changeColor}>Change Color</button>
      <p>
        Width: {Width}px <br /> Height: {Height}px
      </p>
    </div>
  )
}

export default UseEffectExm
