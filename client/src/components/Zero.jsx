import React from "react";
import "../CSS_files/Zero.css";

function Zero() {
  // const gifStyle = {
  //   position: "absolute",
  //   top: "2%",
  //   right: "2%",
  //   width: "15%",
  //   maxWidth: "150px",
  // };

  /*const logoStyle = {
    position: "absolute",
    bottom: "2%",
    right: "2%",
    width: "8%",
    maxWidth: "80px",
  };*/

  // <img
  //         src="./assets/Zero-page/iiit_logo.png"
  //         alt="Logo"
  //         style={logoStyle}
  //       />
  return (
    <div>
      <div className="containerStyle">
        <a href="/home">
          <img
            src="./assets/Zero-page/btnLetsBegin.png"
            alt="Button"
            className="btnStyle"
            loading="eager"
          />
        </a>
      </div>
    </div>
  );
}

export default Zero;
