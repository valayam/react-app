import React from 'react';
import '../styles/pages/RegisterPage.css';

const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="form-container">
        <h2>Register</h2>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <button type="submit" className="button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;