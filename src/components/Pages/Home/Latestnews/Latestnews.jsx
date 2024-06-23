import React from "react";
import Latestnewscard from "./Latestnewscard";
import { latestnews } from "../../../Data/Data";
import "./Latestnews.css";

export default function Latestnews() {
  return (
    <>
      <div className="latestnews ">
        <div className="title">Latest News</div>
        <div className="row-2 ">
          {latestnews.map((val, index) => {
            return (
              <Latestnewscard
                key={index}
                img={val.img}
                title={val.title}
                des={val.des}
                date={val.date}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
