import React from "react";
import story from "../../Images/story.jpg";

export default function Photopage() {
  return (
    <>
      <div className="photopage">
        <div className="page">
          <img src={story} alt="image" />
        </div>
      </div>
    </>
  );
}
