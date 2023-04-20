//! change the name of this file to SignUpLogin.js

import React, { useState } from "react";
import OrderHistory from "./OrderHistory";

function SignupLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
 //! have questions about login code here
    setIsLoggedIn(true);
  }

  function handleSignup() {
 //! have questions about singup code here
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <OrderHistory />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email" //! not sure about this
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password" //! not sure about this
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignup}>Signup</button>
        </div>
      )}
    </div>
  );
}

export default SignupLogin;
