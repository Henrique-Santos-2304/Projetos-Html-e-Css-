import React from "react";
import X from "../../img/X.svg";

export default function Modal({ url, alt, fn }) {
  return (
    <div className="Modal" onClick={fn}>
      <button className="superX">
        <img src={X} alt="close" />
      </button>
      <h3>{alt}</h3>
      <div className="image">
        <img src={url} alt="Beyblade wins" id="blade" />
      </div>
    </div>
  );
}
