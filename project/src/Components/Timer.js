import React, { useState, useRef } from 'react'
// hooks: useState, useRef
const Timer = () => {
  const [count, setCount] = useState(0)
  const intervalRef = useRef(null)

  const startTimer = () => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1)
      }, 1000)
    }
  }

  const stopTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default Timer
