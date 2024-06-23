import React from "react";
import { responsive, Latest } from "../../../Data/Data";
import Latestfuncards from "./Latestfuncards";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Comman from "../Comman/Comman";
import "./Latestfundraiser.css";

export default function Latestfundraiser() {
  return (
    <>
      <div className="latestf">
        <Comman title="Latest Fundraisers" />
        <div className="card-dis">
          <Carousel responsive={responsive}>
            {Latest.map((val, index) => {
              return (
                <Latestfuncards
                  key={index}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  para={val.para}
                  shortpara={val.shortpara}
                  amount={val.amount}
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
