import React, { Component } from 'react';

import email from '../img/contact-email.svg';
import phone from '../img/contact-phone.svg';
import address from '../img/contact-address.svg';

const clearForm = () => {
  document.getElementById("userContact").reset();
};

function Contact() {

  function notReal() {
    alert('Sorry, this is not a real form!')
  }
  
  return (
    <div>
      <div className="contact-main-container">
        <div className="contact-main-header">
          <span>Contact Us</span>
        </div>
        <div className="contact-content-container">
          <div className="contact-direct-container">
            <div className="contact-direct-card">
              <div>
                <img src={email} alt="Address" />
              </div>
              <div className="contact-direct-card-text">
                <div>
                  <span className="contact-title">Email</span>
                </div>
                <div>
                  <span className="contact-info">support@newstack</span>
                </div>
              </div>
            </div>
            <div className="contact-direct-card">
              <div>
                <img src={phone} alt="Address" />
              </div>
              <div className="contact-direct-card-text">
                <div>
                  <span className="contact-title">Phone</span>
                </div>
                <div>
                  <span className="contact-info">1-512-555-5555</span>
                </div>
              </div>
            </div>
            <div className="contact-direct-card">
              <div>
                <img src={address} alt="Address" />
              </div>
              <div className="contact-direct-card-text">
                <div>
                  <span className="contact-title">Address</span>
                </div>
                <div>
                  <span className="contact-info">1234 Downtown St
                    <br />
                    Austin, TX 78701</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <h4 className="form-header">Send a Message</h4>
            <form id="userContact" action="none">
              <div className="form-field">
                <div>
                  <input id="firstName" type="text" placeholder="First Name" />
                </div>
                <div>
                  <input id="lastName" type="text" placeholder="Last Name" />
                </div>
                <div>
                  <input id="userEmail" type="email" placeholder="Email" />
                </div>
                <div>
                  <textarea name="userMessage" id="userMessage" placeholder="Type your message..."></textarea>
                </div>
              </div>
            </form>
            <div className="contact-form-btn-container">
              <div>
                <button className="form-reset-btn" onClick={clearForm}>Reset</button>
              </div>
              <div>
                <button className="form-submit-btn" onClick={notReal}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
