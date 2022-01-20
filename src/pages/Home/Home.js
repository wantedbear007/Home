import React from "react";
import "./Home.css";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

const Home = () => {
  // resume Button Handler
  const resumeButtonHandler = () => {
    const url =
      "https://drive.google.com/file/d/1vKuqIBo47lKAHEnM39pq1KCruJe2b2C1/view";
    window.open(url);
  };

  // Projects button Handler
  const projectsButtonHandler = () => {
    window.location.replace("projects");
  };

  return (
    <div className="homeParentContainer">
      <Fade bottom>
        <div className="nameContainer">
          <h1 className="name">Hi, I'm Bhanupratap.</h1>
          <p className="slogan">
            I believe that user experience is what makes a good product great.
          </p>
          <p className="designation">Front-end / UI / UX developer.</p>
          <div className="buttonContainer">
            <button className="resumeButton" onClick={resumeButtonHandler}>
              resume
            </button>
            <NavLink to="/projects" className="tabText" activeclassname="active">
            <button className="projectsButton">
              Projects
            </button>
          </NavLink>
          </div>
        </div>
        <div>
          <img
            alt="User"
            src={require("../../assets/Images/user.png")}
            className="image"
          />
        </div>
      </Fade>
    </div>
  );
};

export default Home;
