import React from "react";
import bacteria from "./Images/stethoscope.png";
import folder from "./Images/folder.png";
import tsx from "./Images/TOE.jpeg";
import search from "./Images/search.webp";

export default function Examination() {
  return (
    <div className="exam">
      <div className="symp-up">
        <div className="symp-up-left">
          <img src={bacteria} alt="" className="bacteria" />
          <p className="symp">
            <b>Examination Findings</b>
          </p>
        </div>
        <div className="symp-up-right">
          <img src={folder} alt="" className="folder" />
          <img src={tsx} alt="" className="tsx" />
        </div>
      </div>
      <div className="symp-down">
        <form>
          <img className="search-icon" src={search} alt="" />
          <input
            className="search-inp"
            type="search"
            placeholder="Start typing findings ..."
          />
        </form>
      </div>
    </div>
  );
}
