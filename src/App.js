import React from 'react';
import { Switch, Router } from 'react-router-dom';
import history from "./utils/history";

function App() {
  return (
    <div className="App">
      <h1>Thinker</h1>
      <Router history={history}>
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
