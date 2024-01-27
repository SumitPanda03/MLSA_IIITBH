import React from "react";
import { useEffect, useRef, useState, useMemo } from "react";
import Typed from "typed.js";
import "../CSS_files/Chapter.css";
import "../CSS_files/Carousel.css";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import Carousel from "../components/Carousel.jsx";
import { VscGithub, VscMail } from "react-icons/vsc";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";
import axios from "axios";

export default function Projects() {
    const el = useRef(null);
    const [data, setData] = useState([]);

    const getUserData = async () => {
        const res = await axios.get(
            "https://mlsa-backend.onrender.com/uploads/getdata",
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (res.data.status === 401 || !res.data) {
            console.log("Error!!");
        } else {
            setData(res.data.getUser);
        }
    };

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["OUR MLSA's"],
            typeSpeed: 70,
            loop: true,
            showCursor: false,
        });
        // getUserData();
        return () => {
            typed.destroy();
        };
    }, []);

    useEffect(() => {
      // Fetch data after the carousel is initially rendered
      getUserData();
  }, []);
    const cardsData = useMemo(() => {
        data.length > 0
            ? data.map((el) => ({
                  title: el.username,
                  imageUrlFront: el.imgfront,
                  imageUrlBack: el.imgback,
                  description: (
                      <div className="description">
                          <ul>
                              <li>
                                  <strong className="bold-black">ID:</strong>{" "}
                                  <span className="list-content">
                                      {el.clgid}
                                  </span>
                              </li>
                              <li style={{ marginTop: "10px" }}>
                                  <strong className="bold-black">
                                      Branch:
                                  </strong>{" "}
                                  <span className="list-content">
                                      {el.branch}
                                  </span>
                              </li>
                              <div className="social">
                                  <li style={{ marginTop: "10px" }}>
                                      <strong className="bold-black">
                                          {" "}
                                          Socials :{" "}
                                      </strong>
                                  </li>
                                  &nbsp;&nbsp;
                                  <a
                                      href={el.gh}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                  >
                                      <VscGithub />{" "}
                                  </a>
                                  &nbsp;
                                  <a
                                      href={el.ig}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                  >
                                      <FaInstagram />{" "}
                                  </a>
                                  &nbsp;
                                  <a
                                      href={el.li}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                  >
                                      <FaLinkedin />{" "}
                                  </a>
                                  &nbsp;
                                  <a
                                      href={el.mail}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                  >
                                      <VscMail />
                                  </a>
                                  &nbsp;
                              </div>
                          </ul>
                      </div>
                  ),
              }))
            : [];
    }, [data]);

    const Card = React.memo(
        ({ title, imageUrlFront, imageUrlBack, description }) => {
            const [isFlipped, setIsFlipped] = useState(false);

            return (
                <div
                    className={`card ${isFlipped ? "flipped" : ""}`}
                    onMouseEnter={() => setIsFlipped(true)}
                    onMouseLeave={() => setIsFlipped(false)}
                >
                    <div className="card-inner">
                        <div className="card-front">
                            <img
                                className="uniform-image"
                                src={imageUrlFront}
                                alt={title}
                                loading="lazy"
                            />
                            <div className="title">
                                <h2>{title}</h2>
                            </div>
                        </div>
                        <div className="card-back">
                            <img
                                className="uniform-image"
                                src={imageUrlBack}
                                alt={title}
                                loading="lazy"
                            />
                            {description}
                        </div>
                    </div>
                </div>
            );
        }
    );

    return (
    <div>
        <Navbar />
        <h1 className="typed-content container ">
            <span ref={el} />
        </h1>
        <br />
        <div className="app">
            <Carousel />
        </div>
        {data !== null && (
            <div className="app">
                {data.length > 0 ? (
                    <Carousel>
                        {cardsData.map((card, i) => (
                            <Card
                                key={i}
                                title={card.title}
                                imageUrlFront={card.imageUrlFront}
                                imageUrlBack={card.imageUrlBack}
                                description={card.description}
                            />
                        ))}
                    </Carousel>
                ) : (
                    <p>No data available.</p>
                )}
            </div>
        )}
        <Footer />
    </div>
);

}
