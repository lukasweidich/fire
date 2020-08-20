import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./context/Auth";
import PrivateRoute from "./util/PrivateRoute";

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
