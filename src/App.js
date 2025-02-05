import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import Home from './components/Home'

import About from './components/About'

// import Navbar from './components/Navbar'

import NotFound from './components/NotFound'

import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = isDarkTheme => {
    // const {isDarkTheme} = this.state
    this.setState({isDarkTheme: !isDarkTheme})
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{isDarkTheme, toggleTheme: this.toggleTheme}}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
