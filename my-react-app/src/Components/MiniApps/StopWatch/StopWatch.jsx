// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react'
import './style.css'

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const intervalIdRef = useRef(null)
  const startTimeRef = useRef(0)

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current)
      }, 10)
    }
    return () => clearInterval(intervalIdRef.current)
  }, [isRunning])

  const handleStart = () => {
    setIsRunning(true)
    startTimeRef.current = Date.now() - elapsedTime
  }

  const handleStop = () => setIsRunning(false)

  const handleReset = () => {
    setElapsedTime(0)
    setIsRunning(false)
  }

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60000)).padStart(2, '0')
    const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0')
    const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, '0')
    return `${minutes}:${seconds}:${milliseconds}`
  }

  return (
    <div className='stopwatch'>
      <p className='display'>{formatTime(elapsedTime)}</p>
      <div className='controls'>
        <button className='start-btn' onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button className='stop-btn' onClick={handleStop} disabled={!isRunning}>
          Stop
        </button>
        <button className='reset-btn' onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default StopWatch
