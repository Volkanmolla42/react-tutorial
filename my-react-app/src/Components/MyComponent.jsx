import React, { useState } from 'react'

const MyComponent = () => {
  const [Name, setName] = useState('Guest')
  const [Age, setAge] = useState(0)
  const [IsEmployed, setIsEmployed] = useState(false)

  const updateName = () => {
    setName('Volkan')
  }
  const updateAge = () => {
    setAge(Age + 1)
  }
  const toggleEmpStatus = () => {
    setIsEmployed(!IsEmployed)
  }
  return (
    <div>
      <p>Name: {Name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>{Age}</p>
      <button onClick={updateAge}>Increment Age</button>
      <p>Employ: {IsEmployed ? 'Yes' : 'No'}</p>
      <button onClick={toggleEmpStatus}>Toggle Status</button>
    </div>
  )
}

export default MyComponent
