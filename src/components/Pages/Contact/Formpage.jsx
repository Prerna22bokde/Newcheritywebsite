import React from "react";
import icon from "../../Images/error_icon.png";
import "./Contact.css";

export default function Formpage() {
  return (
    <>
      <div className="formpage">
        <div className="form">
          <input className="form_entry" placeholder="Your Name" type="text" />
          <input className="form_entry" placeholder="Your Email" type="email" />
          <input className="form_entry" placeholder="Subject" type="text" />
          <textarea
            className="form_entry"
            placeholder="Message"
            type="text"
            rows={10}
            cols={10}
          />
          <button>SEND MESSAGE</button>
        </div>
        <div className="text-form">
          <div className="text-box">
            <img src={icon} alt="error_icon" />
            <h3>Sorry! Something went wrong</h3>
            <p>
              This page didn't Google Maps correctly. See the Javascript console
              for technical details.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
