import React from 'react'
import { HomePage } from './app/HomePage'
import { LoginPage } from './features/auth/LoginPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (    
    <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage />
            )}
          />
          <Route exact path="/login" component={LoginPage} />
        </Switch>      
    </Router>
  )
}

export default App;

