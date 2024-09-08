import Button from './Button/Button'
import Card from './Card'
import Food from './Food'
import Footer from './Footer'
import Header from './Header'
import Student from './Student'

const App = () => {
  return (
    <>
      <Header />
      <Footer />
      <Food />
      <Card />
      <Button />
      <Student name="SpongeBob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="sandy" age={27} isStudent={true} />
      <Student />
      <Student name="Larry" />
    </>
  )
}

export default App
