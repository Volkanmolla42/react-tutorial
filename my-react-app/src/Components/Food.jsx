const Food = () => {
  const food1 = 'orange'
  const food2 = 'banana'

  return (
    <div>
      <ul>
        <li>Apple</li>
        <li>{food1}</li>
        <li>{food2.toUpperCase()}</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default Food
