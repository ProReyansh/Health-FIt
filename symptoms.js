import React from "react";
import bacteria from "./Images/bacteria.jpg";
import folder from "./Images/folder.png";
import tsx from "./Images/tsx.svg";
import search from "./Images/search.webp";

export default function Symptoms() {
  return (
    <div className="symptoms">
      <div className="symp-up">
        <div className="symp-up-left">
          <img src={bacteria} alt="" className="bacteria" />
          <p className="symp">
            <b>Symptoms</b>
          </p>
          <button className="ICD">ICD-10</button>
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
            placeholder="Start typing Symptoms / Chief Complaints"
          />
        </form>
      </div>
    </div>
  );
}
