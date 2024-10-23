import React from 'react';
import './Contact.css'; // Importing the custom CSS

const ContactPage = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="flex-column text-center mb-12">
          <h1 className="title">Contact Us</h1>
          <p className="description">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
        </div>
        <div className="form-container">
          <div className="flex-wrap">
            <div className="form-field">
              <label htmlFor="name" className="label">Name</label>
              <input type="text" id="name" name="name" className="input" />
            </div>
            <div className="form-field">
              <label htmlFor="email" className="label">Email</label>
              <input type="email" id="email" name="email" className="input" />
            </div>
            <div className="form-field full-width">
              <label htmlFor="message" className="label">Message</label>
              <textarea id="message" name="message" className="textarea"></textarea>
            </div>
            <div className="form-field full-width">
              <button className="submit-button">Submit</button>
            </div>
            <div className="contact-info">
              <a className="email">faishonShop@email.com</a>
              <p className="address">49 W 13th St.<br />Karachi, MN 56301</p>
              <div className="social-icons">
                <a className="icon">
                  {/* SVG for icon */}
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="svg-icon" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="icon">
                  {/* SVG for icon */}
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="svg-icon" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="icon">
                  {/* SVG for icon */}
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="svg-icon" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="icon">
                  {/* SVG for icon */}
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="svg-icon" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
