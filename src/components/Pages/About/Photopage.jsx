import React, { useEffect, useState } from "react";
import story from "../../Images/story.jpg";
import two from "../../Images/howitwork.jpg";
import three from "../../Images/voluntree.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Photopage() {
  const photopage = [story, two, three];
  const [photo, setPhoto] = useState(0);

  const handleplus = () => {
    setPhoto(photo === photopage.length - 1 ? 0 : photo + 1);
  };
  const handleminus = () => {
    setPhoto(photo === 0 ? photopage.length - 1 : photo - 1);
  };

  useEffect(() => {
    const photoclear = setInterval(() => {
      handleplus();
    }, 5000);
    return () => clearInterval(photoclear);
  }, [photo]);

  return (
    <>
      <div className="photopage">
        <div className="page">
          {photopage.map((item, i) => (
            <div key={i} className={`${photo === i ? "block" : "hidden"}`}>
              <img src={item} alt="image" />
            </div>
          ))}
          <div className="photoarrow">
            <FaArrowLeft onClick={handleminus} />
            <FaArrowRight onClick={handleplus} />
          </div>
        </div>
      </div>
    </>
  );
}
