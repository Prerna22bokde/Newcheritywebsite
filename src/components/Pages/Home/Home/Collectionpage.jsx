import React from "react";
import Whoweare from "../Whoweare/Whoweare";
import Cardshow from "../Card/Cardshow";
import Latestfundraiser from "../Latestfundraiser/Latestfundraiser";
import Latestdonation from "../Latestdonation/Latestdonation";
import Successstory from "../Successstory/Successstory";
import Latestnews from "../Latestnews/Latestnews";
// import Vonteerstoday from "../Volunteerstoday/Volunteerstoday";

export default function Collectionpage() {
  return (
    <>
      <Whoweare />
      <Cardshow />
      <Latestfundraiser />
      <Latestdonation />
      <Successstory />
      <Latestnews />
      {/* <Vonteerstoday /> */}
    </>
  );
}

// media queries
// down in max, up in min

//  s
// @media (max-width: 400px) {
// }

// /sm

// @media only screen and (max-width: 640px) {
// }

// /md
// @media only screen and (max-width: 768px) {
// }

// /lg
// @media (max-width: 1024px) {
// }

// /xl
// @media (max-width: 1280px) {
// }

// xl
// @media (max-width: 1536px) {
// }

// ---------------------2nd media
// ------------------media query
//  Extra small devices (phones, 600px and down)
// @media only screen and (max-width: 600px) {...}

//  Small devices (portrait tablets and large phones, 600px and up)
// @media only screen and (min-width: 600px) {...}

//  Medium devices (landscape tablets, 768px and up)
// @media only screen and (min-width: 768px) {...}

//  Large devices (laptops/desktops, 992px and up)
// @media only screen and (min-width: 992px) {...}

//  Extra large devices (large laptops and desktops, 1200px and up)
// @media only screen and (min-width: 1200px) {...}
