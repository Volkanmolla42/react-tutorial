import PropTypes from 'prop-types'

const List = ({ items = [], category = 'Category' }) => {
  // items.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical
  // items.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical
  // items.sort((a, b) => a.calories - b.calories); // numeric
  // items.sort((a, b) => b.calories - a.calories); // reverse numeric
  // const lowCalItems = items.filter((item) => item.calories < 100); // low cal
  // const highCalItems = items.filter((item) => item.calories > 100); // high cal

  const listItems = items.map((item) => (
    <li key={item.id}>
      {item.name}: <b>{item.calories}</b>
    </li>
  ))

  return (
    <>
      <h3 className='list-category'>{category}</h3>
      <ol className='list-items'>{listItems}</ol>
    </>
  )
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number, // Added to match your code logic
    }),
  ),
}

export default List
