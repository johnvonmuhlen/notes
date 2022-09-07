import React, { useState } from "react";

const Header = () => {
  const changeLight = () => {
    if (document.querySelector("body").style.backgroundColor === "white") {
      console.log("turn black");
      document.querySelector("body").style.backgroundColor = "black";
      document.querySelector("#nav").style.color = "white";
    } else {
      document.querySelector("#nav").style.color = "black";
      document.querySelector("body").style.backgroundColor = "white";
    }
  };
  return (
    <div id="nav">
      <h1>
        Notes <span id="span">By John von Muhlen</span>
      </h1>
      <i
        onClick={changeLight}
        className="fa-solid fa-circle-half-stroke"
        id="light"
      ></i>
    </div>
  );
};

export default Header;
