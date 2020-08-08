import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { api } from "./config";
import { useAuth0 } from "@auth0/auth0-react";
import history from './utils/history';
import Navbar from './components/Navbar';
import CustomDrawer from './components/CustomDrawer';

export default function App() {
  const { isLoading, user, setUser, getAccessTokenSilently } = useAuth0();
  const postUserInfo = async () => {
      const token = await getAccessTokenSilently();
      const data = {username: user.nickname};

      const res = await fetch(`${api}/users`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
          }
      })
      const apiRes = await res.json();
      // await setUser({...user, userId: apiRes.userId});
  }
  if (user) {
    postUserInfo();
  }
  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    );
  } else {
    return (
      <div style={{backgroundColor:"#b0bec5", height:"100vh", width:"100vw"}} className="App">
      <Router history={history}>
        <header style={{padding:"0px"}}>
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
