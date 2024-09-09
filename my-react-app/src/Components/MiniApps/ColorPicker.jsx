// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
const ColorPicker = () => {
  const [Color, setColor] = useState('#a052ff')

  const handleColorChange = (e) => {
    setColor(e.target.value)
  }

  return (
    <div className='color-picker-container'>
      <h1>Color Picker</h1>
      <div className='color-display' style={{ backgroundColor: Color }}>
        <p>Selected Color: {Color}</p>
      </div>
      <label>Select a Color: </label>
      <input type='color' name='' value={Color} onChange={handleColorChange} id='' />
    </div>
  )
}

export default ColorPicker
