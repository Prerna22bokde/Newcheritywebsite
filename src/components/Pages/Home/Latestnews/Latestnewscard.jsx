import React from "react";

export default function Latestnewscard(props) {
  return (
    <>
      <div className="news">
        <div className="news-img">
          <img src={props.img} alt="" />
        </div>
        <div className="body">
          <h3>{props.title}</h3>
          <p className="date">{props.date}</p>
          <p className="dis">{props.des}</p>
          <p>
            <a href="#">Read More</a>
          </p>
        </div>
      </div>
    </>
  );
}
