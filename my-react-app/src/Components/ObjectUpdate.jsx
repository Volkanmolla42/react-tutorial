// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const ObjectUpdate = () => {
  const [Car, setCar] = useState({ year: 2023, make: 'Ford', model: 'Mustang' })

  const handleMakeChange = (e) => {
    setCar((c) => ({ ...c, make: e.target.value }))
  }

  const handleYearChange = (e) => {
    setCar((c) => ({ ...c, year: e.target.value }))
  }

  const handleModelChange = (e) => {
    setCar((c) => ({ ...c, model: e.target.value }))
  }

  return (
    <div>
      <p>
        Your favorite car is: {Car.year} {Car.make} {Car.model}
      </p>

      <input type='number' onChange={handleYearChange} value={Car.year} />
      <br />
      <input type='text' onChange={handleMakeChange} value={Car.make} />
      <br />
      <input type='text' onChange={handleModelChange} value={Car.model} />
      <br />
    </div>
  )
}

export default ObjectUpdate
