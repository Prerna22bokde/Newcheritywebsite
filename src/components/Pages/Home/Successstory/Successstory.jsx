import React from "react";
import story from "../../../Images/story.jpg";
import "./Successstory.css";

export default function Successstory() {
  return (
    <>
      <div className="full-container">
        <div className="full-up-img"></div>
        <div className="home2">
          <div className="container">
            <div className="row  grid grid-cols-2 gap-3">
              <div className="block">
                <img src={story} alt="" />
              </div>
              <div className="block-f">
                <span>SUCCESS STORIES</span>
                <h3>
                  Water Is Life. We Successfuly Provide Clean Water in South
                  East Asia
                </h3>
                <p className="block-f-text">
                  Far far away,behind the word mountains,far from the countries
                  Vokalia and Consonantia,there live the blind texts.
                </p>
                <p className="block-raise">We have raised $100,000</p>
                <button>READ THE FULL STORY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
