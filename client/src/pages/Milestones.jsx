import React from "react";
import "../CSS_files/Milestones.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { VscAzure } from "react-icons/vsc";
import {
  FaLinkedin,
  FaCode,
  FaMicrosoft,
  FaShirt,
  FaSocks,
  FaBottleWater,
  FaCube,
  FaLaptop,
} from "react-icons/fa6";
import { MdVideoCameraFront } from "react-icons/md";
import { IoShirtSharp, IoRibbonSharp } from "react-icons/io5";
import { PiCertificateBold } from "react-icons/pi";

function Milestones() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="timeline">
          <div className="timeline-row">
            <div className="timeline-time mt-4">NEW MLSA</div>

            <div className="timeline-content">
              <img
                className="img-fluid rounded"
                src="./assets/badges/LevelNew.png"
                alt=" NEW MLSA"
              />
              <p>
                Student Ambassadors are required to complete various
                pre-identified activities in order to grow their skills on a
                well-defined road to success. As you complete these activities,
                your program milestones are advanced. Additional program
                benefits are unlocked too. Milestones are advanced in order from{" "}
                <strong style={{ color: "#e4d08f" }}>New to Alpha</strong>,{" "}
                <strong style={{ color: "#e4d08f" }}>Alpha to Beta</strong> and{" "}
                <strong style={{ color: "#e4d08f" }}>Beta to Gold</strong>.
                Program certificates are updated with each milestone
                advancement. Milestones showcase your expertise and let the
                world know about your achievements. You are encouraged to share
                your milestone advancements with your{" "}
                <strong style={{ color: "#e4d08f" }}>local</strong> and{" "}
                <strong style={{ color: "#e4d08f" }}>online</strong>&nbsp;
                communities.
              </p>
              <div className="thumbs">
                <div className="thumbs">
                  <img
                    className="img-fluid rounded"
                    src="./assets/avatar/avatar1.png"
                    alt="Maxwell Admin"
                  />
                  <img
                    className="img-fluid rounded"
                    src="./assets/avatar/avatar2.png"
                    alt="Maxwell Admin"
                  />
                  <img
                    className="img-fluid rounded"
                    src="./assets/avatar/avatar3.png"
                    alt="Maxwell Admin"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-time">ALPHA MLSA</div>
            <div className="timeline-content">
              <img
                className="img-fluid rounded"
                src="./assets/badges/LevelAlpha.png"
                alt="ALPHA MLSA"
              />
              <p>
                Student Ambassadors that complete a learning path on Microsoft
                Learn will earn the Alpha badge.
              </p>
              <ul>
                <li>
                  <strong style={{ color: "#e4d08f" }}>
                    150$ monthly Azure credits
                  </strong>
                </li>
                <li>
                  <strong style={{ color: "#e4d08f" }}>
                    Visual Studio Enterprise subscription
                  </strong>
                </li>
                <li>
                  <strong style={{ color: "#e4d08f" }}>
                    StudentAmbassadors.com email address
                  </strong>
                </li>
                <li>
                  <strong style={{ color: "#e4d08f" }}>
                    Event workshop kits
                  </strong>
                </li>
                <li>
                  <strong style={{ color: "#e4d08f" }}>
                    Incentives for event attendees
                  </strong>
                </li>
              </ul>
              <div className="thumbs">
                <div className="thumbs">
                  <VscAzure />
                  <FaLinkedin />
                  <FaCode />
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-time">BETA MLSA</div>
            <div className="timeline-content">
              <img
                className="img-fluid rounded"
                src="./assets/badges/LevelBeta.png"
                alt="BETA MLSA"
              />
              <p>
                Student Ambassadors who plan and host an event for other
                students in their community will earn the Beta badge.
              </p>
              <ul>
                <li>
                  <strong style={{ color: "#e4d08f" }}>
                    Alpha benefits
                  </strong>
                </li>
                <li>
                  <strong style={{ color: "#e4d08f" }}>
                    Swag
                  </strong>
                </li>
                <li>
                  <strong style={{ color: "#e4d08f" }}>
                    Event support
                  </strong>
                </li>
                <li>
                  <strong style={{ color: "#e4d08f" }}>
                    Mentorship   
                  </strong>
                </li>
              </ul>
              <div className="thumbs">
                <div className="thumbs">
                  <FaShirt />
                  <FaBottleWater />
                  <FaSocks />
                  <FaCube />
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-time">GOLD MLSA</div>
            <div className="timeline-content">
              <img
                className="img-fluid rounded"
                src="./assets/badges/LevelGold.png"
                alt=" GOLD MLSA"
              />
              <p>
                Student Ambassadors who have gone above and beyond serving their
                local community will be invited to the Gold milestone.
              </p>
              <ul>
                <li>
                  <strong style={{ color: "#e4d08f" }}>
                    Alpha and Beta benefits
                  </strong>
                </li>
                <li>
                  <strong style={{ color: "#e4d08f" }}>
                    Program leadership opportunities
                  </strong>
                </li>
                <li>
                  <strong style={{ color: "#e4d08f" }}>
                    Microsoft Most Valuable Professional (MVP) mentorship
                  </strong>
                </li>
                <li>
                  <strong style={{ color: "#e4d08f" }}>
                    May be invited to the MVP program
                  </strong>
                </li>
                <li>
                  <strong style={{ color: "#e4d08f" }}>
                    Exclusive Gold swag
                  </strong>
                </li>
              </ul>
              <div className="thumbs">
                <div className="thumbs">
                  <FaLaptop />
                  <FaMicrosoft />
                  <MdVideoCameraFront />
                  <IoShirtSharp />
                  <IoRibbonSharp />
                  <PiCertificateBold />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Milestones;
