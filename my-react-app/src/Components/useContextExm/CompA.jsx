import React, { createContext, useState } from 'react'
import CompB from './CompB'
export const UserContext = createContext()

const CompA = () => {
  const [User, setUser] = useState('Volkan')

  return (
    <div className='box'>
      <h1>Component A</h1>
      <h2>{`Hello ${User}`}</h2>
      <UserContext.Provider value={User}>
        <CompB user={User} />
      </UserContext.Provider>
    </div>
  )
}

export default CompA
