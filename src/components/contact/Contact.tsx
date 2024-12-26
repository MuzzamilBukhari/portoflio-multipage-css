"use client";
import React, { useState } from "react";
import { Button, Input } from "..";
import "@/styles/contact/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title" data-aos="fade-down">
            Contact <span className="contact-title-span">Us</span>
          </h1>
          <p className="contact-description" data-aos="fade-up">
            Please fill this form if you have any queries or a message.
          </p>
        </div>
        <div className="contact-form-container">
          <form
            onSubmit={handleSubmit}
            className="contact-form"
            data-aos="zoom-up"
            data-aos-duration="2000"
          >
            <div className="form-full-width form-space-y">
              <div className="form-relative">
                <Input
                  label="Name"
                  type={"text"}
                  placeholder={"Enter your full name"}
                  name={"name"}
                  value={formData.name}
                  onchange={handleChange}
                />
              </div>
              <div className="form-relative">
                <Input
                  label="Email"
                  type={"text"}
                  placeholder={"Enter your full name"}
                  name={"email"}
                  value={formData.email}
                  onchange={handleChange}
                />
              </div>
            </div>
            <div className="form-full-width form-space-y">
              <div className="form-relative">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="form-submit-container">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
