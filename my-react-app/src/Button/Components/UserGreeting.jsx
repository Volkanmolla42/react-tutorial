import PropTypes from 'prop-types'
const UserGreeting = ({ isLoggedIn = false, username = 'Guest' }) => {
  const welcomeMessage = <h1 className="welcome-message">Hello, {username}!</h1>
  const loginPrompt = (
    <h2 className="login-prompt">Please log in to continue</h2>
  )
  return isLoggedIn ? welcomeMessage : loginPrompt
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}
export default UserGreeting
