import React from "react";
import "./Latestfundraiser";

export default function Latestfuncards(props) {
  return (
    <>
      <div className="latestfundries">
        <div className="card">
          <div className="card-in">
            <img src={props.imgsrc} alt={props.imgsrc} />
            <div className="body">
              <h1>{props.title}</h1>
              <p className="same">{props.para}</p>
              <p className="donation">{props.shortpara}</p>
              <p className="line"></p>
              <p className="same">{props.amount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
