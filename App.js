import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  // Mock user credentials (you can replace with API call)
  const userCredentials = {
    email: "student@ibm.com",
    password: "phase4project"
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === userCredentials.email && password === userCredentials.password) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid email or password!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="App">
      <h1>IBM Login Authentication System</h1>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {userCredentials.email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="login-form">
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
      )}
    </div>
  );
}

export default App;
    