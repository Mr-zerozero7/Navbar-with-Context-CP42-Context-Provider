// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const homeLightTheme =
  'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
const homeDarkTheme =
  'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)
      const backgroundColor = isDarkTheme
        ? 'content-dark-mode'
        : 'content-light-mode'

      return (
        <>
          <Navbar />
          <div className={`home-page-container ${backgroundColor}`}>
            <img
              className="home-dark-pic"
              src={isDarkTheme ? homeDarkTheme : homeLightTheme}
              alt="home"
            />
            <h1 className="home-heading">Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
