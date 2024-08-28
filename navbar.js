import React from "react";
import leftArrow from "./Images/left-arrow.png";
import anonymous from "./Images/anonymous person.jpeg";
import dot from "./Images/dot.png";
import da from "./Images/down-arrow.png";
import edit from "./Images/edit.jpeg";
import vid from "./Images/video.png";
import grid from "./Images/grid 3x3.png";
import px from "./Images/px.png";
import temp from "./Images/temp-T.png";
import set from "./Images/settings.png";
import gem from "./Images/gemini.png";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="nav-left">
        <img className="left-arrow" src={leftArrow} alt="left-arrow" />
        <img className="anonymous" src={anonymous} alt="" />
        <div className="name">
          <div className="up">
            <b>Pulkit</b>
            <p>19y | M</p>
          </div>
          <div className="down">
            UHID11 <img className="dot" src={dot} alt="" /> +91 9680480916
            <img className="down-arrow" src={da} alt="" />
          </div>
        </div>
        <div className="name-icon">
          <img className="edit" src={edit} alt="" />
          <img className="video" src={vid} alt="" />
        </div>
      </div>
      <div className="nav-mid">
        <img className="grid" src={grid} alt="" />
        <p className="over">Overview</p>
        <img className="px" src={px} alt="" />
        <p className="pad">Pad</p>
      </div>
      <div className="nav-right">
        <img className="temp" src={temp} alt="" />
        <p className="t-temp">Template</p>
        <img className="settings" src={set} alt="" />
        <p className="conf">Configure your pad</p>
        <img className="gemini" src={gem} alt="" />
      </div>
    </div>
  );
}
