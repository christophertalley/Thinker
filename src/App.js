import React from 'react';
import { Switch, Router } from 'react-router-dom';
import history from "./utils/history";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <Navbar/>
        </header>
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
