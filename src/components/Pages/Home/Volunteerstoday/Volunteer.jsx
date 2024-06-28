import React from "react";
import voluntree from "../../../Images/voluntree.jpg";
import "../../Contact/Contact.css";
import "./Volunteer.css";

export default function Volunteer() {
  return (
    <>
      <div className="volunterr">
        <div className="formpage">
          <div className="text-form">
            <img src={voluntree} alt="" />
          </div>
          <div className="form">
            <input className="form_entry" placeholder="Your Name" type="text" />
            <input
              className="form_entry"
              placeholder="Your Email"
              type="email"
            />
            <input className="form_entry" placeholder="Subject" type="text" />
            <textarea
              className="form_entry"
              placeholder="Message"
              type="text"
              rows={5}
              cols={10}
            />
            <button>SEND</button>
          </div>
        </div>
      </div>
    </>
  );
}
