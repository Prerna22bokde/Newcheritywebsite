import React from "react";

export default function Gallerycollect(props) {
  return (
    <>
      <div className="box-imggallery">
        <img src={props.img} alt="" />
      </div>
    </>
  );
}
