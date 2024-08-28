import React from "react";
import leftArrow from "./Images/pen.webp";
import anonymous from "./Images/heart.png";
import dot from "./Images/lungs.jpg";
import da from "./Images/water.png";

export default function Vitals() {
  return (
    <div className="vitals">
      <div className="vit-head">
        <div className="vit-head-left">
          <img src={leftArrow} alt="" className="pen" />
          <p className="Vit">
            <b>Vitals</b>
          </p>
        </div>
        <div className="vit-head-right">
          <button className="confi">
            <b>Configure</b>
            <svg
              className="blue-set"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#03508e"
                d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="vit-up">
        <div className="vit-up-up">
          <div className="vit-cons">
            <img src={anonymous} alt="" className="vit-cons-img" />
            <p className="vit-cons-p">Pulse rate</p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but">/min</button>
          </div>
          <div className="vit-cons">
            <img src={dot} alt="" className="vit-cons-img" />
            <p className="vit-cons-p">Peripheral oxygen saturation</p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but">%</button>
          </div>
          <div className="vit-cons">
            <img src={da} alt="" className="vit-cons-img" />
            <p className="vit-cons-p">Blood preasure</p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but">mmHg</button>
          </div>
        </div>
        <div className="vit-up-down">
          <div className="vit-cons">
            <img src={dot} alt="" className="vit-cons-img" />
            <p className="vit-cons-p2">Respiratory rate</p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but2">/min</button>
          </div>
        </div>
      </div>
      <hr className="vit-hr" />
      <div className="vit-down">
        <div className="vit-down-up">
          <p className="vit-down-up-calc">
            <b>CALCULATORS:</b>
          </p>
          <div className="vit-down-box">
            <p className="vit-down-box-t">
              <b>HOMA-IR</b>
            </p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but3">
              <u>Calculate</u>
            </button>
          </div>
          <div className="vit-down-box">
            <p className="vit-down-box-t">
              <b>Waist Hip Ratio</b>
            </p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but3">
              <u>Calculate</u>
            </button>
          </div>
          <div className="vit-down-box">
            <p className="vit-down-box-t">
              <b>QUICKI</b>
            </p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but3">
              <u>Calculate</u>
            </button>
          </div>
          <div className="vit-down-box">
            <p className="vit-down-box-t">
              <b>Child Pugh</b>
            </p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but3">
              <u>Calculate</u>
            </button>
          </div>
          <div className="vit-down-box">
            <p className="vit-down-box-t">
              <b>MELD Score</b>
            </p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but3">
              <u>Calculate</u>
            </button>
          </div>
        </div>
        <div className="vit-down-2">
          <div className="vit-down-box">
            <p className="vit-down-box-t">
              <b>eGFR</b>
            </p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but39">
              <u>Calculate</u>
            </button>
          </div>
          <div className="vit-down-box">
            <p className="vit-down-box-t">
              <b>NAFLD fibrosis score</b>
            </p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but39">
              <u>Calculate</u>
            </button>
          </div>
          <div className="vit-down-box">
            <p className="vit-down-box-t">
              <b>Epworth sleepiness score</b>
            </p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but39">
              <u>Calculate</u>
            </button>
          </div>
          <div className="vit-down-box">
            <p className="vit-down-box-t">
              <b>ABCD Score</b>
            </p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but39">
              <u>Calculate</u>
            </button>
          </div>
          <div className="vit-down-box">
            <p className="vit-down-box-t">
              <b>LMP EDD</b>
            </p>
            <input type="date" className="vit-cons-inp" />
            <button className="vit-cons-but39">
              <u>Calculate</u>
            </button>
          </div>
        </div>
        <div className="vit-down-3">
          <div className="vit-down-box">
            <p className="vit-down-box-t">
              <b>USG EDD</b>
            </p>
            <input type="date" className="vit-cons-inp" />
            <button className="vit-cons-but39">
              <u>Calculate</u>
            </button>
          </div>
          <div className="vit-down-box">
            <p className="vit-down-box-t">
              <b>CVD 10 Yr Risk</b>
            </p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but39">
              <u>Calculate</u>
            </button>
          </div>
          <div className="vit-down-box">
            <p className="vit-down-box-t">
              <b>HAS-BLED score</b>
            </p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but39">
              <u>Calculate</u>
            </button>
          </div>
          <div className="vit-down-box">
            <p className="vit-down-box-t">
              <b>CHA2DS2-Vasc score</b>
            </p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but39">
              <u>Calculate</u>
            </button>
          </div>
          <div className="vit-down-box">
            <p className="vit-down-box-t">
              <b>RCRI</b>
            </p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but39">
              <u>Calculate</u>
            </button>
          </div>
        </div>
        <div className="vit-down-4">
          <div className="vit-down-box5">
            <p className="vit-down-box-t">
              <b>Vital Capacity</b>
            </p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but39">
              <u>Calculate</u>
            </button>
          </div>
          <div className="vit-down-box5">
            <p className="vit-down-box-t">
              <b>Bode Index Score</b>
            </p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but39">
              <u>Calculate</u>
            </button>
          </div>
          <div className="vit-down-box">
            <p className="vit-down-box-t">
              <b>FIB-4</b>
            </p>
            <input type="text" className="vit-cons-inp" />
            <button className="vit-cons-but39">
              <u>Calculate</u>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
