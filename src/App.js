import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/LogIn" component={LogIn} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
