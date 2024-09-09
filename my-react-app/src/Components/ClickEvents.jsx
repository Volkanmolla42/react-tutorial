//
const ClickEvents = () => {
  let count = 0
  const handleClick = (name) => {
    if (count < 3) {
      count++
      console.log(`${name} you clicked me ${count} times`)
    } else {
      console.log(`${name} stop clicking me `)
    }
  }

  const handleClick2 = (e) => {
    e.target.textContent = 'OUCH! 🥲'
    console.log(e)
  }
  //
  return (
    <div>
      <button onClick={(e) => handleClick2(e)}>Click me 😀</button>
    </div>
  )
}

export default ClickEvents
