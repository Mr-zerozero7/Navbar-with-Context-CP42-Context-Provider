// Write your code here
import './index.css'
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

const aboutLightTheme =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
const aboutDarkTheme =
  'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backgroundColor = isDarkTheme
        ? 'content-dark-mode'
        : 'content-light-mode'

      return (
        <>
          <Navbar />
          <div className={`about-page-container ${backgroundColor}`}>
            <img
              className="about-dark-pic"
              src={isDarkTheme ? aboutDarkTheme : aboutLightTheme}
              alt="about"
            />
            <h1 className="about-heading">About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
