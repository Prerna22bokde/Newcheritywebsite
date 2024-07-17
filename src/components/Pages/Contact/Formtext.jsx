import React from "react";
// import "../Home/Volunteerstoday/Volunteer.css";
import icon from "../../Images/error_icon.png";
import "./Contact.css";

export default function Formtext() {
  return (
    <div className="formtext">
      <div className="volunterr">
        <div className="formpage">
          <div className="formtext">
            <div className="text-box">
              <img src={icon} alt="error_icon" />
              <h3>Sorry! Something went wrong</h3>
              <p>
                This page didn't Google Maps correctly. See the Javascript
                console for technical details.
              </p>
            </div>
          </div>
          <div className="form">
            <input
              className="form_entry"
              id="in"
              name="name"
              placeholder="Your Name"
              type="text"
            />
            <input
              className="form_entry"
              id="in"
              name="ename"
              placeholder="Your Email"
              type="email"
            />
            <input
              className="form_entry"
              id="in"
              name="dname"
              placeholder="Subject"
              type="text"
            />
            <textarea
              className="form_entry"
              id="in"
              placeholder="Message"
              type="text"
              rows={5}
              cols={10}
            />
            <button>SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
}
