import styles from './Button.module.css'
const Button = () => {
  const styles2 = {
    button: {
      backgroundColor: '#4CAF50',
      border: 'none',
      padding: '20px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  }
  return (
    <div>
      <button className={styles.button}>Click me!</button>
      <button style={styles2.button}>Click me!</button>
    </div>
  )
}

export default Button
