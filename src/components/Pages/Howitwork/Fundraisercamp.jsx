import React from "react";
import "./Howitwork.css";
import fundimg from "../../Images/howitwork.jpg";

export default function Fundraisercamp() {
  return (
    <>
      <div className="fundraisercamp">
        <div className="sec-1">
          <span>STEP 01</span>
          <h3>Create Your Fundraising Campaign</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            perspiciatis aperiam eum facilis molestiae fugiat earum ab soluta
            repellat debitis.
          </p>
        </div>
        <div className="sec-2">
          <img src={fundimg} alt=""></img>
        </div>
      </div>
    </>
  );
}
