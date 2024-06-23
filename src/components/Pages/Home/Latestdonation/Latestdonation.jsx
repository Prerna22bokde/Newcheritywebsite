import React from "react";
import { latestdonation } from "../../../Data/Data";
import Latestdonationcard from "./Latestdonationcard";
import Comman from "../Comman/Comman";
import "./Latestdonation.css";

export default function Latestdonation() {
  return (
    <>
      <div className="latest-donation-show">
        <Comman title="Latest Donation" />
        <div className="row">
          <div className="col">
            {latestdonation.map((val, index) => {
              return (
                <Latestdonationcard
                  kay={index}
                  img={val.img}
                  name={val.name}
                  des={val.des}
                  amount={val.amount}
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
