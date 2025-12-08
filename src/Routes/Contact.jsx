import React, { useRef } from 'react';
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import "./ContactStyles.css";

const Contact = () => {

   const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yr05dw3', 'template_xzct526', form.current, {
        publicKey: 'rOsQGLo3lzbkuHZPK',
      })
      .then(
        () => {
          
           Swal.fire({
    icon: "success",
    title: "Success",
    text: "Your form was submitted!",
  });

        },
        (error) => {
          Swal.fire({
    icon: "error",
    title: "Error",
    text: `There was an error submitting the form!`,
  });
        },
      );
  };

  return (
    <div className="container">
      <div className="mini-container">
        <form ref={form} onSubmit={sendEmail} className="f">
          <h1 className="contact-header">Contact_Me</h1>

          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea
            className="txt"
            id="message"
            name="message"
            rows="2"
            placeholder="Type your message here"
          ></textarea>

          <button className="btn" type="submit" id="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
