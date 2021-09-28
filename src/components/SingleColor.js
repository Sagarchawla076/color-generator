import React, { useState } from "react";

const SingleColor = ({ rgb, weight, hex, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const white = index > 10 ? "white" : "";
  const hexValue = `#${hex}`;
  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
  return (
    <article
      className={`color ${white}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => handleClick()}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};
export default SingleColor;
