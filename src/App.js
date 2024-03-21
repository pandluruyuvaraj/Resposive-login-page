import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    alert(`Logging in with username: ${username} and password: ${password}`);
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="Email"
            id="username"
            className='text-box'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className='text-box'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'} Password
          </span>
        </div>
        <button type="submit">Login</button>
      </form>
      <h2>OR</h2>
      <div>
      <button className='google-btn' type="submit">GOOGLE</button>
      <button className='facebook-btn' type="submit">FACEBOOK</button>
      </div>
    </div>
  );
}

export default App;
