import React from "react";
import Lottie from "lottie-react";
import ms1 from "../images/microsoft1.json";
import ms2 from "../images/microsoft2.json";
import "../CSS_files/Title.css";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

function Title() {
  return (
    <div>
      <Navbar />
      <div className="home-container container">
        <div className="text-center mt-5">
          <img
            src="./assets/Zero-page/iiit_logo.png"
            className="title-logo"
            alt="iiit_logo"
          />
          <br />
          <h1 style={{ color: "#f2cc8f" }}>Microsoft Learn Student Ambassadors</h1>
          <h3 style={{ color: "#f2cc8f" }}>@</h3>
          <h1 style={{ color: "#f2cc8f" }}>IIIT Bhubaneswar</h1>
          <img
            src="/assets/badges/mlsa_badge.png"
            className="badge-logo"
            alt="badge"
          />
        </div>
        <div className="animation">
          <div className="animation-left">
            <Lottie animationData={ms1} alt="..." />
          </div>
          <div className="animation-right">
            <Lottie animationData={ms2} alt="..." />
          </div>
        </div>

        <div className="writing">
          <br />
          <button type="button" className="btn btn-secondary btn-lg btn-block">
            Microsoft Learn Student Ambassadors Program
          </button>
          <br />
          <p>
            <strong style={{ color: "#f2cc8f" }}>
              Microsoft Learn Student Ambassadors
            </strong>{" "}
            Program is a program to bring together all the students from all
            over the world who have the passion for Technology, have the desire
            and craze to learn more about technology and help the community. It
            is a student-led community supported by{" "}
            <strong style={{ color: "#f2cc8f" }}>Microsoft</strong>, aimed at
            empowering students to contribute to their technical communities
            while gaining skills and experiences related to Microsoft
            technologies. <br />
            <br />
            MLSAs collaborate with{" "}
            <strong style={{ color: "#f2cc8f" }}>Microsoft</strong>, learn about
            <strong style={{ color: "#f2cc8f" }}> Azure</strong> and other
            Microsoft services, and share their knowledge and experiences with
            their peers. The Ambassadors get an opportunity to interact with
            their peers, mentors, Professionals, learn various Microsoft
            technologies, and implement it in the real world. This program
            sponsors all the undergraduate and postgraduate students in terms of
            technology and all the events they do in this{" "}
            <strong style={{ color: "#f2cc8f" }}>community</strong>. Once you
            are an ambassador, you are introduced to the amazing community and
            you can start <strong style={{ color: "#f2cc8f" }}>hosting</strong>{" "}
            events!
            <br />
            <br />
            <strong style={{ color: "#f2cc8f" }}>MLSA @ IIIT BBSR</strong>{" "}
            serves as a hub for students at IIIT who are passionate about
            technology and want to make a positive impact on their community.
            The chapter provides a platform for students to come together,
            collaborate, and work towards a common goal of enhancing their
            technical skills while also giving back to the community.
            <br />
            <br />
            Furthermore, being a part of the{" "}
            <strong style={{ color: "#f2cc8f" }}>MLSA IIIT Chapter</strong>{" "}
            opens doors to a vibrant community of{" "}
            <strong style={{ color: "#f2cc8f" }}>
              like-minded individuals
            </strong>
            ,<strong style={{ color: "#f2cc8f" }}>mentors</strong>, and{" "}
            <strong style={{ color: "#f2cc8f" }}>professionals</strong>. It
            offers a unique environment where students can learn, grow, and
            develop their technical expertise. The chapter also sponsors various
            &nbsp;
            <strong style={{ color: "#f2cc8f" }}>
              technology-related events
            </strong>{" "}
            and <strong style={{ color: "#f2cc8f" }}>initiatives</strong>{" "}
            organized by its members, further fostering a culture of{" "}
            <strong style={{ color: "#f2cc8f" }}>learning</strong> and{" "}
            <strong style={{ color: "#f2cc8f" }}>sharing</strong>.
          </p>
          <br />
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Title;
