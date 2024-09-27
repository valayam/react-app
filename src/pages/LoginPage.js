import React from 'react';
import '../styles/pages/LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="form-container">
        <h2>Login</h2>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit" className="button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;