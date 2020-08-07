import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import history from './utils/history';
import Navbar from './components/Navbar';
import CustomDrawer from './components/CustomDrawer';

export default function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    );
  } else {
    return (
      <div className="App">
      <Router history={history}>
        <header>
          <Navbar/>
        </header>
        <Switch>
          <Route component={CustomDrawer}/>
        </Switch>
      </Router>
    </div>
  );
}
}
