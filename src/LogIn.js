import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
import app from "./base";
import { AuthContext } from "./Auth";

const LogIn = ({ history }) => {
  const handleLogIn = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>LogIn</h1>
      <form onSubmit={handleLogIn}>
        <label>
          Email<input name="email" type="email" placeholder="E-Mail"></input>
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password"></input>
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default withRouter(LogIn);
