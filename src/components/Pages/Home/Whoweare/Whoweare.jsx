import React from "react";
import "./Whoweare.css";

export default function Whoweare() {
  return (
    // ---------------------------------second-page-------------------//
    <>
      <div className="whoweare">
        <div className="container">
          <div className="row grid grid-cols-2 gap-3  ">
            <div className="block-1">
              <div className="box">
                <span>Served Over</span>

                <p>1,321,901</p>
                <span>Children in 150 Countries</span>
                <br />
                <button>VIEW OUR PROGRAM</button>
              </div>
            </div>
            <div className="block-2">
              <h2>Who Are We?</h2>
              <p className="para">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia,there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language pcean.
              </p>
              <p className="para-2">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>

              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
