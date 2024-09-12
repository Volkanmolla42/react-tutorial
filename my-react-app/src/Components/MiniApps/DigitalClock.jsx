// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

import sunset from '../../images/sunset.jpg'
import night from '../../images/night.jpg'

const DigitalClock = () => {
  const [Time, setTime] = useState(new Date())
  const [backgroundImage, setBackgroundImage] = useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

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
