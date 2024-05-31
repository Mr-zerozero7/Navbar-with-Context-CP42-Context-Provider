// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backgroundColor = isDarkTheme
        ? 'content-dark-mode'
        : 'content-light-mode'

      return (
        <>
          <Navbar />
          <div className={`notfound-page-container ${backgroundColor}`}>
            <img
              className="notfound-pic"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className="notfound-heading">Lost your way?</h1>
            <p className="notfound-note">
              We cannot seem to find the page you are looking
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
