import React from "react";
import volunteer from "../../../Images/voluntree.jpg";
import "./Volunteerstoday.css";

export default function Vonteerstoday() {
  return (
    <>
      <div className="full-volunteer-container ">
        <div className="full-up-img"></div>
        <div className="home2">
          <div className="container">
            <div className="row  grid grid-cols-2 gap-3">
              <div className="block">
                <img src={volunteer} alt="" />
              </div>
              <div className="block">
                <div className="shortform">
                  <h2>Be A Volunteers Today</h2>
                  <input
                    className="forminput"
                    type="text"
                    placeholder="Enter your name"
                  ></input>
                  <br />
                  <input
                    className="forminput"
                    type="email"
                    placeholder="Enter your email"
                  ></input>
                  <br />
                  <textarea
                    className="forminput"
                    rows="3"
                    cols="20"
                    placeholder="Enter your message"
                  ></textarea>
                  <br />
                  <button className="formbtn">SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
