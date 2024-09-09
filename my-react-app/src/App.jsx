import List from './Components/List'

const App = () => {
  const fruits = [
    { id: 1, name: 'apple', calories: 95 },
    { id: 2, name: 'orange', calories: 45 },
    { id: 3, name: 'banana', calories: 105 },
    { id: 4, name: 'coconut', calories: 159 },
    { id: 5, name: 'pineapple', calories: 37 },
  ]
  const vegetables = [
    { id: 6, name: 'tomato', calories: 88 },
    { id: 7, name: 'potato', calories: 66 },
    { id: 8, name: 'eggplant', calories: 77 },
    { id: 9, name: 'onion', calories: 44 },
    { id: 10, name: 'carrot', calories: 22 },
  ]
  return (
    <>
      {fruits.length > 0 && <List items={fruits} />}
      {vegetables.length > 0 && <List category='vegetables' />}
    </>
  )
}

export default App
