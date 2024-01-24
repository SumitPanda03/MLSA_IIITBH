import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../images/Octo-Hello.json";
import { Button } from "react-bootstrap";

function Zero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowButton(true);
    }, 2500);

    return () => clearTimeout(timeoutId);
  }, []);

  const backgroundStyle = {
    backgroundImage:
      "radial-gradient(circle 815px at 23.4% -21.8%, rgba(9,29,85,1) 0.2%, rgba(0,0,0,1) 100.2%)",
    height: "100vh",
    // width: "100vw",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    backgroundSize:"cover",
    backgroundPosition:"center",
    // justifyContent: "center",
    // alignItems: "center",
  };

  const buttonStyle = {
    width: "150px",
    backgroundColor: "#000000",
    color: "#ffffff",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
    border: "2px solid #ffffff",
    cursor: "pointer",
    transition: "transform 0.2s, color 0.2s, box-shadow 0.2s, opacity 1s", // Added opacity transition
    fontWeight: "bold",
    // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Box shadow when not hovered
    opacity: showButton ? 2 : 0, // Initial opacity
    boxShadow: "4px 8px 8px rgba(255, 255, 0, 0.2)",
  };

  const buttonHoverStyle = {
    transform: "translateY(-5px)",
    color: "#6852ff",
    boxShadow: "0 8px 12px rgba(255, 255, 0, 0.2)", // Box shadow when hovered
  };

  return (
    <div style={backgroundStyle}>
      <div className="text-center">
        <div className="d-flex justify-content-center align-items-center mt-4 ">
          <Lottie options={defaultOptions} height={450} width={450} />
        </div>
        <Button
          as={Link}
          className="mb-0"
          to="/home"
          variant="primary"
          style={{
            ...buttonStyle,
            ...(isButtonHovered && buttonHoverStyle),
          }}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Let's Begin
        </Button>
      </div>
    </div>
  );
}

export default Zero;
