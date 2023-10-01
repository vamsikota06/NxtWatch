import './App.css'

import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'

// Replace your code here
class App extends Component {
  state = {isLightTheme: true}

  toggleTheme = () => {
    this.setState(prevState => ({isLightTheme: !prevState.isLightTheme}))
  }

  render() {
    const {isLightTheme} = this.state
    console.log(isLightTheme)
    return (
      <NxtWatchContext.Provider
        value={{isLightTheme, toggleTheme: this.toggleTheme}}
      >
        <div className="app-container">
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
