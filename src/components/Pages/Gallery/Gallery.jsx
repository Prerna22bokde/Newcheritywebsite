import React from "react";
import Layout from "../../component/Layout";
import Volunteerstoday from "../Home/Volunteerstoday/Volunteerstoday";
import Home from "../Home/Home/Home";
import { Galleryimg } from "../../Data/Data";
import Gallerycollect from "./Gallerycollect";
import "./Gallery.css";
import Volunteer from "../Home/Volunteerstoday/Volunteer";

export default function Gallery() {
  return (
    <Layout>
      <Home />
      <div className="gallery">
        {Galleryimg.map((val, index) => {
          return <Gallerycollect key={index} img={val.img} />;
        })}
      </div>
      <Volunteer />
      {/* <Volunteerstoday /> */}
    </Layout>
  );
}
