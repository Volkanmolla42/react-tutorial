import PropTypes from 'prop-types'
const style = {
  student: {
    fontFamily: "'Arial', sans-serif",
    fontSize: '2em',
    padding: '10px',
    border: '1px solid hsla(0,0%,50%,0.8)',
    display: 'inline-block',
  },
  student_p: {
    margin: '0',
  },
}

const Student = ({ name = 'Guest', age = 0, isStudent = false }) => {
  return (
    <div style={style.student}>
      <p style={style.student_p}>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Is Student: {isStudent ? 'Yes' : 'No'}</p>
    </div>
  )
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}

export default Student
