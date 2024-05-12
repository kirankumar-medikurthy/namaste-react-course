import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-us-main-container">
      <h1 className="contact-us-heading">ContactUs</h1>
      <form className="form-container">
        <div>
          <label id="name">Name : </label>
          <input data-testid="name" htmlFor="name" type="text" placeholder="Enter your name" />
        </div>
        <div>
          <label id="message">Message :</label>
          <input
            htmlFor="message"
            type="text"
            placeholder="Enter your message"
          />
          <button>submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
