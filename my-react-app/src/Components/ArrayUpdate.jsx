// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const ArrayUpdate = () => {
  const [foods, setFoods] = useState(['Apple', 'Orange', 'Banana'])

  const handleAddFood = () => {
    const newFood = document.getElementById('foodInput').value

    setFoods((f) => [...f, newFood])

    document.getElementById('foodInput').value = ''
  }
  const handleRemoveFood = (index) => {
    setFoods(foods.filter((_, i) => i !== index))
  }

  //
  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li
            key={index}
            onClick={() => {
              handleRemoveFood(index)
            }}
          >
            {food}
          </li>
        ))}
        <input type='text' placeholder='Enter Food' id='foodInput' />

        <button onClick={handleAddFood}>Add</button>
      </ul>
    </div>
  )
}

export default ArrayUpdate
