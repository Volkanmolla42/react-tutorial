/**
 * DigitalClock component
 *
 * A React component that displays a digital clock with a dynamic background image
 * that changes based on the current time of day.
 *
 * @example
 * ```jsx
 * import React from 'react';
 * import DigitalClock from './DigitalClock';
 *
 * const App = () => {
 *   return (
 *     <div>
 *       <DigitalClock />
 *     </div>
 *   );
 * };
 * ```
 *
 * @returns {React.ReactElement} A React element representing the digital clock
 */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

import sunset from '../../images/sunset.jpg'
import night from '../../images/night.jpg'

const DigitalClock = () => {
  /**
   * State variables
   */
  const [Time, setTime] = useState(new Date())
  const [backgroundImage, setBackgroundImage] = useState('')

  /**
   * Effect to update the time every second
   */
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  /**
   * Effect to update the background image based on the current time
   */
  useEffect(() => {
    const now = new Date()
    const hours = now.getHours()

    if (hours >= 7 && hours < 21) {
      setBackgroundImage(`url(${sunset})`)
    } else {
      setBackgroundImage(`url(${night})`)
    }
  }, [Time])

  return (
    <div>
      <div className='clock-container' style={{ backgroundImage }}>
        <h1 className='clock'>{Time.toLocaleTimeString()}</h1>
      </div>
    </div>
  )
}

export default DigitalClock
