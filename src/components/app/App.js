import React from 'react';
import AuthPage from './pages/auth'
import Dashboard from './pages/dashboard'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/" exact>
            <AuthPage />
          </Route>

          <Route path="/dashboard" >
            <Dashboard />
          </Route>

        </Switch>

      </div>
    </Router>

  );
}

export default App;
