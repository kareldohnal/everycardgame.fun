import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { LanguageProvider } from './containers/Language';
import { Lobby } from './pages/Lobby/Lobby.js';
import { Playground } from './pages/Playground/Playground.js';

const App = () => (
  <LanguageProvider>
  <Router>
    <Switch>
      <Route path='/play' component={Playground} />
      <Route path='/' component={Lobby} />
      </Switch>
  </Router>
  </LanguageProvider>
)

export default App
