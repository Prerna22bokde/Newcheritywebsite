import React from "react";
import Card from "./Card";
import { Sdata } from "../../../Data/Data";
import "./Card.css";

export default function Cardshow() {
  // --------------------------------------------home-third-page--------------//
  return (
    <>
      <div className="cardshow border-y-2 ">
        <div className="container ">
          <div className="row-2 ">
            {Sdata.map((val, index) => {
              return (
                <Card
                  key={index}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  para={val.para}
                  link={val.link}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
