import React from "react";

export default function Albums({ img, title }) {
  return (
    <div>
      {" "}
      <div className="single">
        <div className="img-container">
          <img src={img} alt="" />
        </div>
        <div className="txt-container">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
