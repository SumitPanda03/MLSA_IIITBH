import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import Typed from "typed.js";
import arrow from "../images/arrow.json";
import "../CSS_files/Application.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function Application() {
  const numberOfArrows = 9; // Number of arrow animations
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["HOW TO APPLY ? "],
      typeSpeed: 70,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="custom-container container">
        <div className="custom-arrow-column left">
          {[...Array(numberOfArrows)].map((_, index) => (
            <div className="custom-arrow" key={index}>
              <Lottie animationData={arrow} alt={`Arrow Animation ${index}`} />
            </div>
          ))}
        </div>
        <div className="custom-content">
          <span ref={el} className="typed-content"></span> {/*JSX CONTENT*/}
          <br />
          <br />
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block my-3"
          >
            Eligibility Criteria
          </button>
          <br />
          <ol>
            <li>
              You must be at least{" "}
              <strong style={{ color: "#4b6cb7" }}>16</strong> years old, have
              valid identification and be actively enrolled in an{" "}
              <strong style={{ color: "#4b6cb7" }}>
                accredited, higher education academic institution
              </strong>
              .
            </li>
            <br />
            <li>
              Some experience in coding or technology will definitely be
              helpful, but do not worry if you don't have much of technical
              background. Students of{" "}
              <strong style={{ color: "#4b6cb7" }}>
                all academic backgrounds{" "}
              </strong>
              who are interested in growing their career and tech skills, are
              encouraged to apply for this program, as all the tools and
              resources are provided to help you learn more and engage in the
              program.
            </li>
          </ol>
          <br />
          <button type="button" className="btn btn-secondary btn-lg btn-block">
            Application
          </button>
          <br />
          <p>
            The Application form is open throughout the year, The selections are
            done on a{" "}
            <strong style={{ color: "#4b6cb7" }}>quarterly basis</strong>.{" "}
            <br />
            The main steps to follow while applying for this program are as
            follows:
          </p>
          <br />
          <ol>
            <li>
              Go to{" "}
              <a
                href="https://studentambassadors.microsoft.com/en-US/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://studentambassadors.microsoft.com/en-US/
              </a>{" "}
              . Click on "
              <strong style={{ color: "#4b6cb7" }}>Apply now</strong>" and{" "}
              <strong style={{ color: "#4b6cb7" }}>Login</strong> with any of
              the mentioned options available.
            </li>
            <br />
            <li>
              Once you are logged in, read all the{" "}
              <strong style={{ color: "#4b6cb7" }}>privacy and terms</strong>,
              and confirm your eligibility. Once you confirm, you will be
              introduced to a Personal Info section, fill all the details
              carefully.
            </li>
            <br />
            <li>
              Once you have filled the personal information, you will be
              introduced to the academic information section, once you fill
              that, the most important part of this application comes:{" "}
              <strong style={{ color: "#4b6cb7" }}>Written Sample</strong>.
            </li>
            <br />
            <li>
              The Written Sample is the most important part of this application,
              where you have to answer the given questions. <br />
              This section is divided into three parts: <br />
              <ul>
                <li>
                  <strong style={{ color: "#4b6cb7" }}>Guide</strong>
                </li>
                <li>
                  <strong style={{ color: "#4b6cb7" }}>Connect</strong>
                </li>
                <li>
                  <strong style={{ color: "#4b6cb7" }}>Welcome</strong>
                </li>
              </ul>
              <br />
              <p>
                Two of the above mentioned are needed to be{" "}
                <strong style={{ color: "#4b6cb7" }}>essay type</strong>{" "}
                descriptive answer under{" "}
                <strong style={{ color: "#4b6cb7" }}>2000 characters</strong>{" "}
                and one of them must be a video with duration atmost{" "}
                <strong style={{ color: "#4b6cb7" }}>2 minutes</strong>.
                <br />
                <br />
                <strong style={{ color: "#4b6cb7" }}>
                  Tips to answer these questions:
                </strong>
                <br />
                <ul>
                  <li>
                    Make sure your answers are honest and genuine, try to
                    explain why you are passionate about technology, and what
                    made you inspire in your best way, that is very important!
                  </li>
                  <br />
                  <li>
                    Mention all your achievements including the projects you are
                    working on/completed, what are the programming languages
                    you've learnt,{" "}
                    <strong style={{ color: "#4b6cb7" }}>
                      competitions/Workshops
                    </strong>{" "}
                    you have{" "}
                    <strong style={{ color: "#4b6cb7" }}>
                      organized/participated/won
                    </strong>
                    .
                  </li>
                  <br />
                  <li>
                    Take an example and explain how you would teach that topic
                    to your peers.
                  </li>
                  <br />
                  <li>
                    If you are hosting an event, explain how would you plan on
                    organizing it from the start, how would you promote it to
                    gather as many students possible to attend the event.
                  </li>
                </ul>
              </p>
              <br />
            </li>
            <li>
              Then comes the{" "}
              <strong style={{ color: "#4b6cb7" }}>social media</strong>{" "}
              section, where you can include the links of all the social media
              platforms you use, as mentioned in the fields.
            </li>
            <br />
            <p>
              Also do not hesitate to share the links of any of your
              blogs/YouTube videos etc. thinking there is nothing much in it or
              there is less content, nothing is less when you try to share your
              knowledge or ideas, what you share and how you share it, is
              important! :) This is also where they will get to know more about
              you!
            </p>
            <br />
            <li>
              Once you have completed filling the social media section, mention
              all the <strong style={{ color: "#4b6cb7" }}>technologies</strong>{" "}
              you are interested in! And if you think there is some additional
              information you want to add, you can add it in the next field
              asked in Additional Information section, after the technologies
              list!
            </li>
          </ol>
          <br />
          <br />
        </div>

        <div className="custom-arrow-column right">
          {[...Array(numberOfArrows)].map((_, index) => (
            <div className="custom-arrow" key={index}>
              <Lottie animationData={arrow} alt={`Arrow Animation ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Application;
