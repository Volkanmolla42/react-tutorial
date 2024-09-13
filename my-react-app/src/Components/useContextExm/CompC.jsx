import React, { useContext } from 'react'
import { UserContext } from './CompA'
import CompD from './CompD'

const CompC = () => {
  const user = useContext(UserContext)

  return (
    <div className='box'>
      <h1>Component C</h1>
      <h1>{`bye again ${user}`}</h1>
      <CompD />
    </div>
  )
}

export default CompC
