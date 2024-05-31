// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

// const logoLightTheme =
//   'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
// const logoDarkTheme =
//   'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

// const btnLightTheme =
//   'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
// const btnDarkTheme =
//   'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickThemeBtn = () => {
        toggleTheme(isDarkTheme)
      }

      return isDarkTheme ? (
        <div className="navbar-container dark-mode">
          <img
            className="nav-logo"
            src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
            alt="website logo"
          />
          <ul className="menu-container">
            <Link to="/" className="menu-item dark-mode">
              <li>Home</li>
            </Link>
            <Link to="/about" className="menu-item dark-mode">
              <li>About</li>
            </Link>
          </ul>
          <div className="theme-container">
            <button
              type="button"
              className="theme-btn"
              data-testid="theme"
              onClick={onClickThemeBtn}
            >
              <img
                className="theme-pic"
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
              />
            </button>
          </div>
        </div>
      ) : (
        <div className="navbar-container light-mode">
          <img
            className="nav-logo"
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            alt="website logo"
          />
          <ul className="menu-container">
            <Link to="/" className="menu-item light-mode">
              <li>Home</li>
            </Link>
            <Link to="/about" className="menu-item light-mode">
              <li>About</li>
            </Link>
          </ul>
          <div className="theme-container">
            <button
              type="button"
              className="theme-btn"
              data-testid="theme"
              onClick={onClickThemeBtn}
            >
              <img
                className="theme-pic"
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
              />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
