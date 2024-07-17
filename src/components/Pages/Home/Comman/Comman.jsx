import React from "react";

export default function Comman(props) {
  return (
    <>
      <div className="latest">
        <h2>{props.title}</h2>
        <p className="latest-text">
          Some quik example text to build on the card title and make up the bulk
          of the card's cotent.
        </p>
        <p className="latest-link">
          <a href="/">View All Fundraisers</a>
        </p>
      </div>
    </>
  );
}
