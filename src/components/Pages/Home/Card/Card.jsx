import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="col-1">
        <div className="col-1">
          <div className="icon">{props.imgsrc}</div>
          <div className="body">
            <h3>{props.title}</h3>
            <p className="para">{props.para}</p>
            <p>
              <a href="#">{props.link}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
