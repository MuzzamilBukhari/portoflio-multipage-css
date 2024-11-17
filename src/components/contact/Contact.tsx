// Contact.tsx
import React from 'react';
import '../../styles/contact/Contact.css';

export default function Contact() {
  return (
    <div id="Contact">
      <section className="contactSection">  
        <div className="container">
          <div className="header">
            <h1 className="title">
              Contact <span className="highlight">Us</span>
            </h1>
            <p className="subTitle">
              For any queries or collaboration opportunities, feel free to reach out through the contact information provided below.
            </p>
          </div>
        </div>

        <section className="mapSection">
          <div className="mapContainer">
            <iframe
              width="100%"
              height="100%"
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14473.428962714777!2d67.1191173841228!3d24.91989720631561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338e531744437%3A0xc146fcc5aa4768fd!2sBlock%2014%20Gulistan-e-Johar%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731156674374!5m2!1sen!2s"
            ></iframe>
          </div>
          <div className="formContainer">
            <div className="formCard">
              <h2 className="formTitle">
                Contact <span className="highlight">Us</span>
              </h2>
              <p className="formDescription">
                Please fill this form if you have any queries or a message for us.
              </p>
              <div className="inputField">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                />
              </div>
              <div className="inputField">
                <label htmlFor="message" className="label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea"
                ></textarea>
              </div>
              <button className="submitButton">
                Submit
              </button>
              <p className="privacyNote">
                Please check our privacy policy for any issues.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
