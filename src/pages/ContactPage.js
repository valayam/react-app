import React from 'react';
import '../styles/pages/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="form-container">
        <h2>Contact Us</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;