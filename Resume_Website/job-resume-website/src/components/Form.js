import React from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uwrcc7s', 'template_80c98wl', e.target, 'XpcGHz4MTS6Q2kJOP')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email. Please try again.');
      });

    e.target.reset();
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
