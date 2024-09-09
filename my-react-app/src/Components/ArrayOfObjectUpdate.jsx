// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const ArrayOfObjectUpdate = () => {
  const [Cars, setCars] = useState([
    { make: 'Ford', model: 'Mustang', year: 2024 },
    { make: 'Nissan', model: 'GTR', year: 2024 },
  ])

  const handleRemoveCar = (index) => {
    setCars(Cars.filter((_, i) => i !== index))
  }

  const handleAddCar = () => {
    const carMake = document.getElementById('carMake').value
    const carModel = document.getElementById('carModel').value
    const carYear = document.getElementById('carYear').value

    setCars((c) => [...c, { make: carMake, model: carModel, year: carYear }])

    document.getElementById('carYear').value = ''
    document.getElementById('carModel').value = ''
    document.getElementById('carMake').value = ''
  }

  return (
    <div>
      <h1>List of car object</h1>
      <ul>
        {Cars.map((carDetail, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {carDetail.year} {carDetail.make} {carDetail.model}
          </li>
        ))}
      </ul>
      <p>
        <input type='text' id='carMake' placeholder='Enter Make' /> <br />
        <input type='text' id='carModel' placeholder='Enter Model' /> <br />
        <input type='number' id='carYear' placeholder='Enter Year' /> <br />
        <button onClick={handleAddCar}>Add Car</button>
      </p>
    </div>
  )
}

export default ArrayOfObjectUpdate
