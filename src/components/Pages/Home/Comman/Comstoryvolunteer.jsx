import React from "react";

export default function Comstoryvolunteer(props) {
  return (
    <>
      <div className="full-volunteer-container ">
        <div className="full-up-img"></div>
        <div className="home2">
          <div className="container">
            <div className="row  grid grid-cols-2 gap-3">
              <div className="block">
                <img src={props.img} alt="" />
              </div>
              <div className="block-f">{props.comp}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
