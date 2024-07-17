import React, { useEffect, useState } from "react";
// import Layout from "../../../component/Layout";
import slide1 from "../../../Images/slide1.jpg";
import slide2 from "../../../Images/slide2.jpg";
import slide3 from "../../../Images/slide3.jpeg";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
// import Collectionpage from "./Collectionpage";
import "./Home.css";
// ----------its a first-page-----

export default function Home() {
  const imgData = [slide1, slide2, slide3];

  const [slider, setSlider] = useState(0);

  const handleplus = () => {
    setSlider(slider === imgData.length - 1 ? 0 : slider + 1);
  };
  const handleminus = () => {
    setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
  };

  useEffect(() => {
    const sliderClear = setInterval(() => {
      handleplus(slider);
    }, 3000);
    return () => clearInterval(sliderClear);
  }, [slider]);
  return (
    // <Layout>
    <div className="home">
      <div className="home-img">
        {imgData.map((item, i) => (
          <div key={i} className={`${slider === i ? "block" : "hidden"}`}>
            <img src={item} alt="bgimg" />
          </div>
        ))}
      </div>
      <div className="slide-text ">
        <p>
          Welcome to Our Site <br />
          Donate Your Cherity Amount
        </p>
      </div>
      <div className="home-img-up"></div>
      <div className="arrow">
        <RiArrowLeftSLine onClick={handleminus} />
        <RiArrowRightSLine onClick={handleplus} />
      </div>
    </div>
    //   <Collectionpage />
    // </Layout>
  );
}
