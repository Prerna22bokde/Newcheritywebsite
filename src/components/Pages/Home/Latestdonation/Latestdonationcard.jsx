import React from "react";

export default function Latestdonationcard(props) {
  return (
    <>
      <div className="person">
        <img src={props.img} alt={props.img} />
        <div className="person-data">
          <h3>{props.name}</h3>
          <p className="person-donat">{props.des}</p>
          <p className="person-do-amt">
            Donated <span>{props.amount}</span>
          </p>
          <p>
            for<a href="/">{props.link}</a>
          </p>
        </div>
      </div>
    </>
  );
}
